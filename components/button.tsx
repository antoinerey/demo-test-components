import type { ComponentProps } from 'react'

type Props = ComponentProps<'button'>

export function Button({ children, className, onClick }: Props) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}