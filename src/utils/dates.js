export function formatDisplayDate(date) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function formatDay(date) {
  return new Intl.DateTimeFormat('en-IN', { weekday: 'long' }).format(date);
}
