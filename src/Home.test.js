import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home';

describe('Home', () => {
  it('renders without crashing', async () => {
    expect(() => render(<Home />)).not.toThrow("Component not found")
  })

  it('renders a h1 tag value', async () => {
    render(<Home />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('renders an input box for first name', () => {
    render(<Home />);
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
  })

  it('renders a submit button', async () => {
    render(<Home />)
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })
})
