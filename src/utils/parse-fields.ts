import { parseDay } from '@/utils/parse-day'
import { parseMonth } from '@/utils/parse-month'
import { parseYear } from '@/utils/parse-year'

interface ParseFieldsParams {
  yearString: string
  monthString: string
  dayString: string
  currentDate: Date
}

export function parseFields({
  yearString,
  monthString,
  dayString,
  currentDate,
}: ParseFieldsParams) {
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()

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
