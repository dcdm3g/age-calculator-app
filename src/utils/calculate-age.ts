interface CalculateAgeParams {
  year: number
  month: number
  day: number
  currentYear: number
  currentMonth: number
  currentDay: number
}

export function calculateAge({
  year,
  month,
  day,
  currentYear,
  currentMonth,
  currentDay,
}: CalculateAgeParams) {
  let years = currentYear - year
  let months = currentMonth - month
  let days = currentDay - day

  if (days < 0) {
    months -= 1

    const previousMonth = new Date(currentYear, currentMonth, 0)
    days += previousMonth.getDate()
  }

  if (months < 0) {
    years -= 1
    months += 12
  }

  return { years, months, days }
}
