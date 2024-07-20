import type { ComponentProps } from 'react'

export function Label(props: Omit<ComponentProps<'label'>, 'className'>) {
  return (
    <label
      className="text-sm font-bold uppercase tracking-widest text-smokey-grey md:text-base"
      {...props}
    />
  )
}
