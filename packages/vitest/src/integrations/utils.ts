export function getRunningMode() {
  return process.env.VITEST_MODE === 'WATCH' ? 'watch' : 'run'
}

export function isWatchMode() {
  return getRunningMode() === 'watch'
}

export function toString(value: any) {
  try {
    return `${value}`
  }
  catch (_error) {
    return 'unknown'
  }
}
