import type { ComponentProps } from 'react'

export function Arrow(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path d="M0.5 12.0103C4.5 11.8287 12.5 13.9723 12.5 24" />
      <path d="M12.5 24V0" />
      <path d="M24.5 12.0103C20.5 11.8287 12.5 13.9723 12.5 24" />
    </svg>
  )
}
