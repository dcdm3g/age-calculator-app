import type { FieldParserReturn } from '@/interfaces/field-parser-return'

interface ParseMonthParams {
  monthString: string
  isCurrentYear: boolean
  currentMonth: number
}

export function parseMonth({
  monthString,
  isCurrentYear,
  currentMonth,
}: ParseMonthParams): FieldParserReturn {
  if (!monthString) {
    return { data: null, error: 'Must a valid month' }
  }

  const month = Number(monthString) - 1

  if (!Number.isInteger(month) || month < 0 || month > 11) {
    return { data: null, error: 'Must be a valid month' }
  }

  if (isCurrentYear && month > currentMonth) {
    return { data: null, error: 'Must be in the past' }
  }

  return { data: month, error: null }
}
