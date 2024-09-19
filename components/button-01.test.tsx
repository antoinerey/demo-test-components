import { expect, it } from 'vitest'
import { Button } from './button'
import { renderToString } from 'react-dom/server'

// it('should render the children', () => {
//   const html = renderToString(<Button>Click me</Button>)
//   expect(html).toBe('<button>Click me</button>')
// })

// it('should render the attributes', () => {
//   const html = renderToString(<Button className="btn">Click me</Button>)
//   expect(html).toBe('<button class="btn">Click me</button>')
// })