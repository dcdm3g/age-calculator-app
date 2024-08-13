import { type ComponentProps, forwardRef } from 'react'

interface InputProps extends Omit<ComponentProps<'input'>, 'className'> {
  variant?: 'default' | 'error'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'default', ...rest }, ref) => {
    return (
      <input
        ref={ref}
        data-error={variant === 'error'}
        className="text-black w-full rounded-lg border border-light-grey px-4 py-3 text-lg font-bold tracking-wide text-off-black caret-purple outline-none transition-colors focus:border-purple data-[error=true]:border-light-red data-[error=true]:caret-light-red md:px-6 md:text-xl [&::-webkit-inner-spin-button]:appearance-none"
        {...rest}
      />
    )
  },
)

Input.displayName = 'Input'
