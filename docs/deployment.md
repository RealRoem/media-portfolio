# Deployment og CI/CD

Dette er den korte fasiten for hvordan prosjektet er deployet fra GitHub til droplet,
Docker, Nginx, SSL og Cloudflare.

## Sluttoppsettet

- Domene: `realroem.com`
- Server: DigitalOcean droplet `161.35.159.152`
- SSH: `root@161.35.159.152`
- Repo: `https://github.com/RealRoem/media-portfolio`
- Container image: `ghcr.io/realroem/media-portfolio:latest`
- App-container: `roem-portfolio`
- Auto-update-container: `roem-watchtower`
- Reverse proxy: Nginx på dropleten
- SSL: Let's Encrypt via Certbot
- DNS/CDN: Cloudflare

Flyten er:

```text
push til main
  -> GitHub Actions tester og bygger
  -> Docker image pushes til GHCR
  -> Watchtower på dropleten puller nytt image
  -> Docker restarter app-containeren
  -> Nginx serverer siden på realroem.com
  -> Cloudflare peker trafikk til serveren
```

## Lokal utvikling

Installer dependencies:

```bash
npm install
```

Kjør lokalt:

```bash
npm run dev
```

Sjekk før push:

```bash
npm run lint
npm run format:check
npm run build
npm run test:coverage
npm run test:e2e
```

## GitHub Actions

Workflow ligger her:

```text
.github/workflows/ci.yml
```

Når du pusher til `main`, gjør GitHub Actions dette:

1. Installerer npm dependencies.
2. Kjører lint.
3. Sjekker formatting.
4. Bygger appen.
5. Kjører tester.
6. Bygger Docker image.
7. Pusher imaget til GitHub Container Registry.

Image-navnet er:

```text
ghcr.io/realroem/media-portfolio:latest
```

Det betyr at du normalt bare trenger:

```bash
git add .
git commit --no-verify -m "din commit message"
git push origin main
```

Vi bruker `--no-verify` når commit-meldingen ikke følger conventional commits.

## Docker image

`Dockerfile` bygger React/Vite-appen og serverer ferdig `dist` via Nginx i containeren.

Viktig poeng:

- Kildekoden skal ikke ligge på dropleten.
- Dropleten skal bare kjøre ferdig Docker image fra GHCR.
- `node_modules`, `.env`, tester og lokale filer skal ikke inn i imaget.

GHCR-imaget må være pullbart fra dropleten. Den enkleste løsningen er at package visibility
settes til public i GitHub:

```text
GitHub repo -> Packages -> media-portfolio -> Package settings -> Change visibility -> Public
```

Test fra dropleten:

```bash
docker pull ghcr.io/realroem/media-portfolio:latest
```

## Droplet

SSH:

```bash
ssh root@161.35.159.152
```

Installer grunnpakker:

```bash
apt update
apt install -y ca-certificates curl gnupg nginx certbot python3-certbot-nginx
```

Installer Docker:

```bash
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" > /etc/apt/sources.list.d/docker.list
apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Sjekk:

```bash
docker --version
docker compose version
```

På en liten droplet med lite RAM la vi også inn swap. Dette gjør serveren mer stabil ved install,
Docker pull og image-oppdateringer:

```bash
fallocate -l 1G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab
free -h
```

## Server mappe

På dropleten bruker vi bare denne mappen:

```text
/opt/roem-portfolio
```

Lag den:

```bash
mkdir -p /opt/roem-portfolio
cd /opt/roem-portfolio
```

## Docker Compose på dropleten

Filen ligger på dropleten her:

```text
/opt/roem-portfolio/docker-compose.yml
```

Innhold:

```yaml
services:
  portfolio:
    image: ghcr.io/realroem/media-portfolio:latest
    container_name: roem-portfolio
    restart: unless-stopped
    ports:
      - '127.0.0.1:8080:8080'

  watchtower:
    image: containrrr/watchtower:latest
    container_name: roem-watchtower
    restart: unless-stopped
    environment:
      DOCKER_API_VERSION: '1.44'
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: --cleanup --interval 60 roem-portfolio
```

Start:

```bash
cd /opt/roem-portfolio
docker compose pull
docker compose up -d
```

Sjekk:

```bash
docker ps
```

Du skal se:

```text
roem-portfolio
roem-watchtower
```

Hvis du tidligere har klonet repoet til serveren, fjern det. Serveren skal ikke ha kildekoden:

```bash
rm -rf /opt/media-portfolio-src
```

Sjekk at bare deploy-mappen ligger igjen:

```bash
ls -la /opt
```

## Watchtower

Watchtower sjekker hvert 60. sekund om `latest`-imaget i GHCR er oppdatert.

Hvis nytt image finnes:

1. Puller Watchtower nytt image.
2. Stopper gammel app-container.
3. Starter ny app-container.
4. Rydder gamle images med `--cleanup`.

Sjekk status:

```bash
docker ps --format '{{.Names}} {{.Status}}'
```

Sjekk logs:

```bash
docker logs --tail 80 roem-watchtower
```

Hvis Watchtower feiler med Docker API-versjon, behold denne i compose:

```yaml
environment:
  DOCKER_API_VERSION: '1.44'
```

## Nginx på dropleten

Nginx tar imot trafikk på port 80/443 og sender den videre til Docker-containeren på
`127.0.0.1:8080`.

Konfig ligger her:

```text
/etc/nginx/sites-available/realroem.com
```

Aktivert via:

```text
/etc/nginx/sites-enabled/realroem.com
```

Grunnkonfig før SSL:

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

Enable:

```bash
ln -s /etc/nginx/sites-available/realroem.com /etc/nginx/sites-enabled/realroem.com
nginx -t
systemctl reload nginx
```

Fjern default-site hvis den finnes, så Nginx ikke serverer feil side:

```bash
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
```

Etter Certbot vil Nginx-filen få SSL-linjer automatisk.

## Cloudflare DNS

Endelig DNS-oppsett:

```text
Type   Name   Content          Proxy
A      @      161.35.159.152   Proxied
CNAME  www    realroem.com     Proxied
```

Ved første SSL-oppsett bør begge settes til `DNS only` midlertidig:

```text
Type   Name   Content          Proxy
A      @      161.35.159.152   DNS only
CNAME  www    realroem.com     DNS only
```

Etter at Certbot har laget sertifikatet, kan begge settes tilbake til `Proxied`.

## SSL med Certbot

Kjør etter at DNS peker riktig til dropleten:

```bash
certbot --nginx --expand -d realroem.com -d www.realroem.com --non-interactive --agree-tos --register-unsafely-without-email
```

Sertifikatet lagres her:

```text
/etc/letsencrypt/live/realroem.com/fullchain.pem
/etc/letsencrypt/live/realroem.com/privkey.pem
```

Sjekk auto-renewal:

```bash
certbot renew --dry-run
```

Sjekk sertifikatet som faktisk er installert:

```bash
certbot certificates
```

## Verifisering

DNS:

```bash
nslookup realroem.com 1.1.1.1
nslookup www.realroem.com 1.1.1.1
```

Forventet når Cloudflare proxy er på:

```text
realroem.com -> Cloudflare IP-er
www.realroem.com -> Cloudflare IP-er
```

Forventet når DNS only er på:

```text
realroem.com -> 161.35.159.152
www.realroem.com -> realroem.com -> 161.35.159.152
```

HTTP/HTTPS:

```bash
curl -I https://realroem.com
curl -I https://www.realroem.com
```

Forventet:

```text
HTTP/1.1 200 OK
```

Direkte origin-test fra egen maskin:

```bash
curl -I --resolve realroem.com:443:161.35.159.152 https://realroem.com
curl -I --resolve www.realroem.com:443:161.35.159.152 https://www.realroem.com
```

Server-test:

```bash
ssh root@161.35.159.152
nginx -t
docker ps --format '{{.Names}} {{.Status}}'
curl -I http://127.0.0.1:8080
```

Sjekk at serveren bare kjører registry-image, ikke et lokalt bygget image:

```bash
docker images
```

Forventet relevante images:

```text
ghcr.io/realroem/media-portfolio latest
containrrr/watchtower latest
```

Hvis du har et gammelt lokalt image som `roem-portfolio:latest`, fjern det:

```bash
docker rmi roem-portfolio:latest
```

## Normal deploy senere

Når du bare skal oppdatere siden:

```bash
git add .
git commit --no-verify -m "update site"
git push origin main
```

Så skjer resten automatisk:

```text
GitHub Actions -> GHCR image -> Watchtower -> Docker restart -> live site
```

Sjekk GitHub Actions hvis noe ikke oppdateres:

```text
GitHub repo -> Actions
```

Sjekk droplet hvis Actions er grønn, men siden ikke oppdateres:

```bash
ssh root@161.35.159.152
docker logs --tail 80 roem-watchtower
docker ps
```

## Vanlige feil

### Siden funker på mobil, men ikke PC

Da er det nesten alltid lokal DNS-cache.

Windows:

```powershell
ipconfig /flushdns
```

Chrome:

```text
chrome://net-internals/#dns
Clear host cache
```

Deretter:

```text
chrome://net-internals/#sockets
Flush socket pools
```

### Certbot feiler med Cloudflare 530

Sett Cloudflare DNS midlertidig til `DNS only`, kjør Certbot igjen, og sett tilbake til
`Proxied` etterpå.

### `www` virker ikke

Sjekk at `www` er:

```text
CNAME www -> realroem.com
```

Og at `@` peker til:

```text
A @ -> 161.35.159.152
```

### Appen kjører ikke

På dropleten:

```bash
cd /opt/roem-portfolio
docker compose pull
docker compose up -d
docker ps
```

### Nginx feiler

```bash
nginx -t
systemctl status nginx
systemctl reload nginx
```

### GitHub Actions er grønn, men siden oppdateres ikke

Sjekk først at nytt image finnes i GHCR:

```text
GitHub repo -> Packages -> media-portfolio
```

Sjekk så Watchtower:

```bash
ssh root@161.35.159.152
docker logs --tail 80 roem-watchtower
docker ps --format '{{.Names}} {{.Status}}'
```

Kjør manuell pull hvis du vil tvinge deploy:

```bash
cd /opt/roem-portfolio
docker compose pull
docker compose up -d
```

## Det vi ikke gjør

- Vi kloner ikke prosjektet til dropleten.
- Vi bygger ikke React-appen på serveren.
- Vi kjører ikke `npm install` på serveren.
- Vi deployer ikke filer manuelt til Nginx.
- Dropleten henter bare ferdig Docker image fra GHCR.
