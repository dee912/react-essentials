import { render } from '@testing-library/react'
import React from 'react'
import App from './App'

test('renders an h1', () => {
  const { getByText } = render(<App />)
  const h1 = getByText(/Hello React testing/)
  expect(h1).toHaveTextContent('Hello React testing')
})