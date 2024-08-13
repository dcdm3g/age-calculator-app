import type { FieldParserReturn } from '@/interfaces/field-parser-return'

export interface ParseYearParams {
  yearString: string
  currentYear: number
}

export function parseYear({
  yearString,
  currentYear,
}: ParseYearParams): FieldParserReturn {
  if (!yearString) {
    return { data: null, error: 'Must be a valid year' }
  }

  const year = Number(yearString)

  if (!Number.isInteger(year)) {
    return { data: null, error: 'Must be a valid year' }
  }

  if (year > currentYear) {
    return { data: null, error: 'Must be in the past' }
  }

  return { data: year, error: null }
}
