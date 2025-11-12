import { format, parseISO } from 'date-fns'

/**
 * Get only the date portion from a date string or Date object
 * @param date - Date string or Date object
 * @returns Formatted date string (e.g., "25")
 */
export const getDateOnly = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, 'd')
}

/**
 * Format a datetime for display
 * @param date - Date string or Date object
 * @param formatString - Optional custom format string (defaults to 'PPP p')
 * @returns Formatted datetime string (e.g., "January 15, 2025 at 3:30 PM")
 */
export const formatDatetimeDisplay = (
  date: string | Date,
  formatString: string = 'PPP p'
): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, formatString)
}

/**
 * Get only the month name from a date string or Date object
 * @param date - Date string or Date object
 * @param short - Whether to return short month name (e.g., "Jan" vs "January")
 * @returns Month name
 */
export const getMonthOnly = (date: string | Date, short: boolean = false): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, short ? 'MMM' : 'MMMM')
}

/**
 * Get only the year from a date string or Date object
 * @param date - Date string or Date object
 * @returns Year as string (e.g., "2025")
 */
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

/**
 * Convert Arabic numerals to Khmer numerals
 * @param num - Number or string to convert
 * @returns Khmer numeral string
 */
const toKhmerNumeral = (num: number | string): string => {
  return String(num)
    .split('')
    .map(digit => KHMER_DIGITS[parseInt(digit)] || digit)
    .join('')
}

/**
 * Get only the date portion in Khmer numerals
 * @param date - Date string or Date object
 * @returns Khmer date string (e.g., "២៥")
 */
export const getDateOnlyKhmer = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  const day = format(dateObj, 'd')
  return toKhmerNumeral(day)
}

/**
 * Get month name in Khmer
 * @param date - Date string or Date object
 * @returns Khmer month name (e.g., "មករា")
 */
export const getMonthOnlyKhmer = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  const monthIndex = dateObj.getMonth()
  return KHMER_MONTHS[monthIndex] || ''
}

/**
 * Get year in Khmer numerals
 * @param date - Date string or Date object
 * @returns Khmer year string (e.g., "២០២៥")
 */
export const getYearOnlyKhmer = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  const year = format(dateObj, 'yyyy')
  return toKhmerNumeral(year)
}

/**
 * Format date in full Khmer format
 * @param date - Date string or Date object
 * @returns Formatted Khmer date (e.g., "២៥ មករា ២០២៥")
 */
export const formatDateKhmer = (date: string | Date): string => {
  const day = getDateOnlyKhmer(date)
  const month = getMonthOnlyKhmer(date)
  const year = getYearOnlyKhmer(date)
  return `${day} ${month} ${year}`
}