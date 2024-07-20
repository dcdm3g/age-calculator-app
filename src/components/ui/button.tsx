import type { ComponentProps } from 'react'

export function Button(props: Omit<ComponentProps<'button'>, 'className'>) {
  return (
    <button
      className="flex size-16 items-center justify-center rounded-full border-2 border-purple bg-purple outline-none transition-colors hover:border-off-black hover:bg-off-black focus:border-off-black md:size-24"
      {...props}
    />
  )
}
