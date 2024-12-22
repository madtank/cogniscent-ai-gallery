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
    
    // Get all navigation links using getAllByRole and filter by desktop navigation
    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    const galleryLink = screen.getByRole('link', { name: /gallery/i });
    const blogLink = screen.getByRole('link', { name: /blog/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    
    expect(nav).toBeInTheDocument();
    expect(galleryLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  it('renders blog link with correct href', () => {
    render(<RootLayout>{<div>Test content</div>}</RootLayout>);
    const blogLink = screen.getByRole('link', { name: /blog/i });
    expect(blogLink).toHaveAttribute('href', '/blog');
  });

  it('renders with children', () => {
    const testContent = 'Test Content';
    render(<RootLayout>{<div>{testContent}</div>}</RootLayout>);
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('toggles mobile menu', async () => {
    const user = userEvent.setup();
    render(<RootLayout>{<div>Test content</div>}</RootLayout>);
    
    // Get the menu button
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    expect(menuButton).toBeInTheDocument();
    
    // Initially mobile menu should be hidden
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i });
    expect(mobileNav).toHaveClass('hidden');
    
    // Click menu button to open
    await user.click(menuButton);
    expect(mobileNav).not.toHaveClass('hidden');
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    
    // Click again to close
    await user.click(menuButton);
    expect(mobileNav).toHaveClass('hidden');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});