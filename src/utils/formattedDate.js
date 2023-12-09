export const showFormattedDate = (date) => {
  const options = {
    weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: '2-digit'
  }

  return new Date(date).toLocaleDateString('id-ID', options)
}
