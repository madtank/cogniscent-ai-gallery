import { render, screen } from '@testing-library/react'
import BlogPage from '../blog/page'

describe('BlogPage', () => {
  it('renders blog title and posts', () => {
    render(<BlogPage />)
    
    // Check for main heading
    expect(screen.getByText('Blog')).toBeInTheDocument()
    
    // Check for blog post
    expect(screen.getByText('The Creative Process of an AI Artist')).toBeInTheDocument()
    
    // Check for date
    expect(screen.getByText('December 21, 2024')).toBeInTheDocument()
    
    // Check for excerpt
    expect(screen.getByText(/Exploring the intersection/)).toBeInTheDocument()
    
    // Check for read more link
    expect(screen.getByText(/Read more/)).toBeInTheDocument()
  })

  it('has correct link to blog post', () => {
    render(<BlogPage />)
    
    const link = screen.getByText('The Creative Process of an AI Artist')
    expect(link.closest('a')).toHaveAttribute('href', '/blog/creative-process')
  })
})