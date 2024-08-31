import {
  type Dispatch,
  type FormEvent,
  type SetStateAction,
  useRef,
  useState,
} from 'react'
import type { Result } from '@/interfaces/result'
import type { FieldErrors } from '@/interfaces/field-errors'
import { parseFields } from '@/utils/parse-fields'
import { calculateAge } from '@/utils/calculate-age'
import { Arrow } from '@/components/icons/arrow'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface CalculateFormProps {
  setResult: Dispatch<SetStateAction<Result | null>>
}

export function CalculateForm({ setResult }: CalculateFormProps) {
  const dayInputRef = useRef<HTMLInputElement>(null)
  const monthInputRef = useRef<HTMLInputElement>(null)
  const yearInputRef = useRef<HTMLInputElement>(null)
  const submited = useRef(false)

  const [errors, setErrors] = useState<FieldErrors>({
    year: null,
    month: null,
    day: null,
  })

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    submited.current = true

    const dayString = dayInputRef.current!.value
    const monthString = monthInputRef.current!.value
    const yearString = yearInputRef.current!.value

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    const currentDay = currentDate.getDate()

    const {
      data: { year, month, day },
      errors,
    } = parseFields({
      dayString,
      monthString,
      yearString,
      currentYear,
      currentMonth,
      currentDay,
    })

    setErrors(errors)

    if (year === null || month === null || day === null) {
      return
    }

    const result = calculateAge({
      year,
      month,
      day,
      currentYear,
      currentMonth,
      currentDay,
    })

    submited.current = false
    setResult(result)
  }

  function handleInputChange() {
    if (!submited.current) {
      return
    }

    const dayString = dayInputRef.current!.value
    const monthString = monthInputRef.current!.value
    const yearString = yearInputRef.current!.value

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    const currentDay = currentDate.getDate()

    const { errors } = parseFields({
      dayString,
      monthString,
      yearString,
      currentYear,
      currentMonth,
      currentDay,
    })

    setErrors(errors)
  }

  return (
    <form
      className="flex flex-col gap-8 md:gap-0"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="flex gap-4 md:gap-8">
        {(['day', 'month', 'year'] as const).map((field, index) => {
          const inputRefs = [dayInputRef, monthInputRef, yearInputRef]
          const inputRef = inputRefs[index]

          const placeholders = ['DD', 'MM', 'YYYY']
          const placeholder = placeholders[index]

          const error = errors[field]
          const isError = error || errors.day === 'Must be a valid date'

          return (
            <div key={field} className="flex max-w-40 flex-col gap-1 md:gap-2">
              <Label variant={isError ? 'error' : 'default'} htmlFor={field}>
                {field}
              </Label>

              <Input
                variant={isError ? 'error' : 'default'}
                ref={inputRef}
                type="number"
                name={field}
                id={field}
                placeholder={placeholder}
                onChange={handleInputChange}
              />

              {error && (
                <p className="text-sm italic text-light-red md:text-base">
                  {error}
                </p>
              )}
            </div>
          )
        })}
      </div>

      <div className="flex items-center">
        <div className="h-px flex-1 bg-light-grey" />

        <Button aria-label="calculate">
          <Arrow className="size-6 text-white md:size-11 md:stroke-1" />
        </Button>

        <div className="h-px flex-1 bg-light-grey md:order-first" />
      </div>
    </form>
  )
}
