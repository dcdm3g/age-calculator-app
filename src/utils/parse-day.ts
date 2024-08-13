import type { FieldParserReturn } from '@/interfaces/field-parser-return'
import { daysByMonthInRegularYear } from '@/constants/days-by-month-in-regular-year'

export interface ParseDayParams {
  dayString: string
  year: number | null
  month: number | null
  isCurrentMonth: boolean
  currentDay: number
}

export function parseDay({
  dayString,
  year,
  month,
  isCurrentMonth,
  currentDay,
}: ParseDayParams): FieldParserReturn {
  if (!dayString) {
    return { data: null, error: 'Must be a valid day' }
  }

  const day = Number(dayString)

  if (!Number.isInteger(day) || day < 1 || day > 31) {
    return { data: null, error: 'Must be a valid day' }
  }

  if (month) {
    const isRegularYear = year && year % 4 !== 0

    const daysByMonth = isRegularYear
      ? daysByMonthInRegularYear
      : daysByMonthInRegularYear.with(1, 29)

    if (day > daysByMonth[month]) {
      return { data: null, error: 'Must be a valid date' }
    }
  }

  if (isCurrentMonth && day > currentDay) {
    return { data: null, error: 'Must be in the past' }
  }

  return { data: day, error: null }
}
