import type { ComponentProps } from 'react'

interface LabelProps extends Omit<ComponentProps<'label'>, 'className'> {
  variant?: 'default' | 'error'
}

export function Label({ variant = 'default', ...rest }: LabelProps) {
  return (
    <label
      data-error={variant === 'error'}
      className="text-sm font-bold uppercase tracking-widest text-smokey-grey data-[error=true]:text-light-red md:text-base"
      {...rest}
    />
  )
}
