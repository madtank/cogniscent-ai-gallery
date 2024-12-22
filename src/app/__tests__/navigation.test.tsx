import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RootLayout from '../layout';

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      pathname: '/',
    };
  },
}));

describe('Navigation', () => {
  it('renders all navigation links', () => {
    render(<RootLayout>{<div>Test content</div>}</RootLayout>);
    
    // Check if all nav links are present
    expect(screen.getByText('Gallery')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders blog link with correct href', () => {
    render(<RootLayout>{<div>Test content</div>}</RootLayout>);
    
    const blogLink = screen.getByText('Blog');
    expect(blogLink).toHaveAttribute('href', '/blog');
  });
});