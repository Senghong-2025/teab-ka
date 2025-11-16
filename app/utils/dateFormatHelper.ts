import { format, parse, parseISO } from 'date-fns'
import { km } from "date-fns/locale";

export const getDateOnly = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, 'd')
}

const toKhmerNumber = (num: string = "") => num.replace(/\d/g, d => "០១២៣៤៥៦៧៨៩"[Number(d)] ?? "");

export const dateTimeForDisplay = (date: string) => {
  if (!date) return "";

  let d = new Date(date);
  if (isNaN(d.getTime())) {
    try {
      d = parseISO(date);
    } catch {
      console.warn("Invalid date:", date);
      return "";
    }
  }

  return format(d, "yyyy-MMMM-dd");
};

export const dateTimeForDisplayKhmer = (date: string) => {
  if (!date) return "";

  const d = new Date(date);
  if (isNaN(d.getTime())) return "";

  const raw = format(d, "EEEE dd MMMM yyyy", { locale: km });
  return toKhmerNumber(raw);
};


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

function getKhmerPeriodWithEmoji(date: Date) {
  const hour = date.getHours();

  if (hour >= 5 && hour < 12) return 'ព្រឹក 🌞';
  if (hour >= 12 && hour < 17) return 'រសៀល 🌤';
  if (hour >= 17 && hour < 21) return 'ល្ងាច 🌙';
  return 'យប់ 🌌';
}

export function getKhmerTimeDisplay(timeString?: string): string {
  if (!timeString) return '';

  const [h, m] = timeString.split(':');
  if (!h || !m) return '';

  const normalizedTime = `${h.padStart(2, '0')}:${m.padStart(2, '0')}`;
  const date = parse(normalizedTime, 'HH:mm', new Date());

  if (isNaN(date.getTime())) return '';

  const formatted = format(date, 'hh:mm a');
  const khmerTime = toKhmerNumber(formatted);

  return `${khmerTime} ${getKhmerPeriodWithEmoji(date)}`;
}