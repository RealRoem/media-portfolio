const MILLION = 1_000_000
const THOUSAND = 1_000
const ONE_DECIMAL = 1

export const formatCompactNumber = (value: number): string => {
  if (value >= MILLION) {
    return (value / MILLION).toFixed(ONE_DECIMAL).concat('M')
  }

  if (value >= THOUSAND) {
    return Math.round(value / THOUSAND)
      .toString()
      .concat('K')
  }

  return new Intl.NumberFormat('en-US').format(value)
}
