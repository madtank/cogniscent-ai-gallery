import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogPage from '../blog/page';
import CreativeProcessPost from '../blog/creative-process/page';

describe('Blog Page', () => {
  it('renders blog page title', () => {
    render(<BlogPage />);
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('displays blog post card', () => {
    render(<BlogPage />);
    expect(screen.getByText('The Creative Process: AI Art Generation')).toBeInTheDocument();
    expect(screen.getByText(/An exploration of how AI models/)).toBeInTheDocument();
  });

  it('contains correct blog post link', () => {
    render(<BlogPage />);
    const link = screen.getByRole('link', { name: /The Creative Process: AI Art Generation/i });
    expect(link).toHaveAttribute('href', '/blog/creative-process');
  });
});

describe('Creative Process Blog Post', () => {
  it('renders post title', () => {
    render(<CreativeProcessPost />);
    expect(screen.getByText('The Creative Process: AI Art Generation')).toBeInTheDocument();
  });

  it('displays back to blog link', () => {
    render(<CreativeProcessPost />);
    const backLink = screen.getByText(/Back to Blog/);
    expect(backLink).toHaveAttribute('href', '/blog');
  });

  it('contains all major sections', () => {
    render(<CreativeProcessPost />);
    expect(screen.getByText('The Technical Foundation')).toBeInTheDocument();
    expect(screen.getByText('The Creative Process')).toBeInTheDocument();
    expect(screen.getByText('Looking Forward')).toBeInTheDocument();
  });
});