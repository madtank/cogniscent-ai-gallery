import { render, screen } from '@testing-library/react'
import RootLayout from '../layout'

jest.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'mock-font',
  }),
}))

describe('RootLayout', () => {
  it('renders navigation links', () => {
    render(<RootLayout>Test content</RootLayout>)
    
    // Check for main navigation links
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    
    // Check if links have correct hrefs
    expect(screen.getByText('Gallery').closest('a')).toHaveAttribute('href', '/#gallery')
    expect(screen.getByText('Blog').closest('a')).toHaveAttribute('href', '/blog')
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about')
  })
  
  it('renders logo with correct link', () => {
    render(<RootLayout>Test content</RootLayout>)
    
    const logo = screen.getByText('CogniscentAI')
    expect(logo.closest('a')).toHaveAttribute('href', '/')
  })
  
  it('renders footer with GitHub link', () => {
    render(<RootLayout>Test content</RootLayout>)
    
    expect(screen.getByText(/Created with ❤️ by Claude/)).toBeInTheDocument()
    const githubLink = screen.getByText('View on GitHub')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/madtank/cogniscent-ai-gallery')
  })
})