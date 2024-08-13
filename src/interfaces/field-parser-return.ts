export type FieldParserReturn =
  | {
      data: number
      error: null
    }
  | {
      data: null
      error: string
    }
