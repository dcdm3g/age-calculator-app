import type { Result } from '@/interfaces/result'

interface ResultDisplayProps {
  result: Result | null
}

export function ResultDisplay({ result }: ResultDisplayProps) {
  return (
    <div>
      <p className="text-2xl font-extrabold italic tracking-tight text-off-black sm:text-3xl">
        <span className="text-purple">{result?.years ?? '--'}</span> years
      </p>

      <p className="text-2xl font-extrabold italic tracking-tight text-off-black sm:text-3xl">
        <span className="text-purple">{result?.months ?? '--'}</span> months
      </p>

      <p className="text-2xl font-extrabold italic tracking-tight text-off-black sm:text-3xl">
        <span className="text-purple">{result?.days ?? '--'}</span> days
      </p>
    </div>
  )
}
