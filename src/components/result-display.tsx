import type { Result } from '@/interfaces/result'

interface ResultDisplayProps {
  result: Result | null
}

export function ResultDisplay({ result }: ResultDisplayProps) {
  return (
    <div>
      <p className="text-2xl font-extrabold italic tracking-tight text-off-black sm:text-3xl">
        <span className="text-purple">{result?.years ?? '- -'}</span>{' '}
        {result?.years === 1 ? 'year' : 'years'}
      </p>

      <p className="text-2xl font-extrabold italic tracking-tight text-off-black sm:text-3xl">
        <span className="text-purple">{result?.months ?? '- -'}</span>{' '}
        {result?.months === 1 ? 'month' : 'months'}
      </p>

      <p className="text-2xl font-extrabold italic tracking-tight text-off-black sm:text-3xl">
        <span className="text-purple">{result?.days ?? '- -'}</span>{' '}
        {result?.days === 1 ? 'day' : 'days'}
      </p>
    </div>
  )
}
