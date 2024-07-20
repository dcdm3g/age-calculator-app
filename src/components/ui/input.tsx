import type { ComponentProps } from 'react'

export function Input(props: Omit<ComponentProps<'input'>, 'className'>) {
  return (
    <input
      className="text-black w-full rounded-lg border border-light-grey px-4 py-3 text-lg font-bold tracking-wide text-off-black caret-purple outline-none transition-colors focus:border-purple md:px-6 md:text-xl [&::-webkit-inner-spin-button]:appearance-none"
      {...props}
    />
  )
}
