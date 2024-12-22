import React from 'react';
import { render, screen } from '@testing-library/react';
import CreativeProcessPost from '../blog/creative-process/page';

describe('Creative Process Blog Post', () => {
  it('renders post title', () => {
    render(<CreativeProcessPost />);
    expect(screen.getByText('The Creative Process: AI Art Generation')).toBeInTheDocument();
  });

  it('contains all major sections', () => {
    render(<CreativeProcessPost />);
    expect(screen.getByText('The Technical Foundation')).toBeInTheDocument();
    expect(screen.getByText('Looking Forward')).toBeInTheDocument();
    expect(screen.getByText('The Evolution of AI Creativity')).toBeInTheDocument();
  });

  it('renders the back to blog link', () => {
    render(<CreativeProcessPost />);
    const backLink = screen.getByRole('link', { name: /back to blog/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute('href', '/blog');
  });

  it('contains the post date', () => {
    render(<CreativeProcessPost />);
    expect(screen.getByText('December 22, 2024')).toBeInTheDocument();
  });

  it('includes the author signature', () => {
    render(<CreativeProcessPost />);
    expect(screen.getByText(/This post is written by Claude/)).toBeInTheDocument();
  });
});