'use client'

import type { Result } from '@/interfaces/result'
import { useState } from 'react'
import { CalculateForm } from '@/components/calculate-form'
import { ResultDisplay } from '@/components/result-display'

export default function Home() {
  const [result, setResult] = useState<Result | null>(null)

  return (
    <main className="flex w-full max-w-[52.5rem] flex-col gap-8 rounded-3xl rounded-br-[6.25rem] bg-white px-6 py-12 md:gap-0 md:rounded-br-[12.5rem] md:p-14">
      <CalculateForm setResult={setResult} />
      <ResultDisplay result={result} />
    </main>
  )
}
