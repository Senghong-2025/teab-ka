import { format, parseISO } from 'date-fns'

export const getDateOnly = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, 'd')
}

export const formatDatetimeDisplay = (
  date: string | Date,
  formatString: string = 'PPP p'
): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, formatString)
}

export const getMonthOnly = (date: string | Date, short: boolean = false): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, short ? 'MMM' : 'MMMM')
}

export const getYearOnly = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, 'yyyy')
}

// Khmer month names
const KHMER_MONTHS = [
  'មករា',      // January
  'កុម្ភៈ',     // February
  'មីនា',       // March
  'មេសា',       // April
  'ឧសភា',      // May
  'មិថុនា',    // June
  'កក្កដា',    // July
  'សីហា',       // August
  'កញ្ញា',     // September
  'តុលា',       // October
  'វិច្ឆិកា',  // November
  'ធ្នូ'        // December
]

// Khmer number conversion
const KHMER_DIGITS = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']

const toKhmerNumeral = (num: number | string): string => {
  return String(num)
    .split('')
    .map(digit => KHMER_DIGITS[parseInt(digit)] || digit)
    .join('')
}

export const getDateOnlyKhmer = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  const day = format(dateObj, 'd')
  return toKhmerNumeral(day)
}

export const getMonthOnlyKhmer = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  const monthIndex = dateObj.getMonth()
  return KHMER_MONTHS[monthIndex] || ''
}

export const getYearOnlyKhmer = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  const year = format(dateObj, 'yyyy')
  return toKhmerNumeral(year)
}

export const formatDateKhmer = (date: string | Date): string => {
  const day = getDateOnlyKhmer(date)
  const month = getMonthOnlyKhmer(date)
  const year = getYearOnlyKhmer(date)
  return `${day} ${month} ${year}`
}