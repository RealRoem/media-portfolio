# Deployment

This project is meant to be deployed as a Docker container behind Nginx on the DigitalOcean
droplet.

## Current Repo Status

- React app: done
- Dockerfile: done
- GitHub Actions quality checks + Docker build check: done
- Docker Compose app runner: done
- Server Docker install: manual server step
- Server Nginx + SSL: manual server step
- DNS: manual domain step

## DNS

Create these records where `realroem.com` is managed:

```text
Type  Name  Value
A     @     <DROPLET_IPV4>
A     www   <DROPLET_IPV4>
```

Wait until this resolves before running SSL:

```bash
dig realroem.com +short
dig www.realroem.com +short
```

## Server Setup

SSH into the droplet:

```bash
ssh root@<DROPLET_IPV4>
```

Install Docker and the Compose plugin:

```bash
apt update
apt install -y ca-certificates curl gnupg nginx certbot python3-certbot-nginx
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" > /etc/apt/sources.list.d/docker.list
apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Create the app folder:

```bash
mkdir -p /opt/roem-portfolio
cd /opt/roem-portfolio
```

Clone and build the app on the server:

```bash
rm -rf /opt/media-portfolio-src
git clone https://github.com/RealRoem/media-portfolio.git /opt/media-portfolio-src
cd /opt/media-portfolio-src
docker build -t roem-portfolio:latest .
```

Create `/opt/roem-portfolio/docker-compose.yml` on the server:

```yaml
services:
  portfolio:
    image: roem-portfolio:latest
    container_name: roem-portfolio
    restart: unless-stopped
    ports:
      - '127.0.0.1:8080:8080'
```

Start the app:

```bash
docker compose pull
docker compose up -d
docker ps
```

## Nginx

Create `/etc/nginx/sites-available/realroem.com`:

```nginx
server {
  listen 80;
  server_name realroem.com www.realroem.com;

  location / {
    proxy_pass http://127.0.0.1:8080;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Enable it:

```bash
ln -s /etc/nginx/sites-available/realroem.com /etc/nginx/sites-enabled/realroem.com
nginx -t
systemctl reload nginx
```

## SSL

Run Certbot after DNS points to the droplet:

```bash
certbot --nginx -d realroem.com -d www.realroem.com
```

Verify auto-renewal:

```bash
certbot renew --dry-run
```

## Updating The Site

After pushing to `main`, GitHub Actions verifies the app and Docker build. Then SSH into the
server and run:

```bash
rm -rf /opt/media-portfolio-src
git clone https://github.com/RealRoem/media-portfolio.git /opt/media-portfolio-src
cd /opt/media-portfolio-src
docker build -t roem-portfolio:latest .
cd /opt/roem-portfolio
docker compose up -d
```
