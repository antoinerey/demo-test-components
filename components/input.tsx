import type { ComponentProps } from 'react'

type Props = ComponentProps<'input'> & {
  label: string
}

export function Input({ className, onInput, label }: Props) {
  return (
    <label>
      {label}
      <input className={className} onInput={onInput} />
    </label>
  )
}