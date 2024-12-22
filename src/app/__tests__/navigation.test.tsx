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
  usePathname() {
    return '/';
  }
}));

describe('Navigation', () => {
  it('renders all navigation links', () => {
    render(<RootLayout>{<div>Test content</div>}</RootLayout>);
    
    // Check if all nav links are present using case-insensitive regex
    expect(screen.getByRole('link', { name: /gallery/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  });

  it('renders blog link with correct href', () => {
    render(<RootLayout>{<div>Test content</div>}</RootLayout>);
    
    const blogLink = screen.getByRole('link', { name: /blog/i });
    expect(blogLink).toHaveAttribute('href', '/blog');
  });

  it('renders with children', () => {
    const testContent = 'Test Content';
    render(<RootLayout><div>{testContent}</div></RootLayout>);
    
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});