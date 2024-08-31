import { parseDay } from '@/utils/parse-day'
import { parseMonth } from '@/utils/parse-month'
import { parseYear } from '@/utils/parse-year'

interface ParseFieldsParams {
  yearString: string
  monthString: string
  dayString: string
  currentYear: number
  currentMonth: number
  currentDay: number
}

export function parseFields({
  yearString,
  monthString,
  dayString,
  currentYear,
  currentMonth,
  currentDay,
}: ParseFieldsParams) {
  const { data: year, error: yearError } = parseYear({
    yearString,
    currentYear,
  })

  const isCurrentYear = year === currentYear

  const { data: month, error: monthError } = parseMonth({
    monthString,
    isCurrentYear,
    currentMonth,
  })

  const isCurrentMonth = isCurrentYear && month === currentMonth

  const { data: day, error: dayError } = parseDay({
    dayString,
    year,
    month,
    isCurrentMonth,
    currentDay,
  })

  return {
    data: {
      year,
      month,
      day,
    },
    errors: {
      year: yearError,
      month: monthError,
      day: dayError,
    },
  }
}
