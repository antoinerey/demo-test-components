// @vitest-environment jsdom

import { afterEach, expect, it, vi } from 'vitest'
import { Button } from './button'
import { render, cleanup } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

// afterEach(() => {
//   cleanup()
// })

// it('should render the children', () => {
//   const screen = render(<Button>Click me</Button>)
//   const button = screen.getByText('Click me')
//
//   expect(button).toBeDefined()
// })

// it('should render the attributes', () => {
//   const screen = render(<Button className="btn">Click me</Button>)
//   const button = screen.getByText('Click me')
//
//   expect(button.className).toBe('btn')
// })

// it('should execute the click handler', async () => {
//   const onClick = vi.fn()
//   const screen = render(<Button onClick={onClick}>Click me</Button>)
//   const button = screen.getByText('Click me')
//
//   await userEvent.click(button)
//
//   expect(onClick).toHaveBeenCalled()
// })