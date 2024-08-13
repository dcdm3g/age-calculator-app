interface CalculateAgeParams {
  currentDate: Date
  year: number
  month: number
  day: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function calculateAge(_params: CalculateAgeParams) {
  return { years: 0, months: 0, days: 0 }
}
