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
    const nav = screen.getByLabelText('Main navigation');
    const galleryLink = screen.getAllByRole('link', { name: /gallery/i })[0];
    const blogLink = screen.getAllByRole('link', { name: /blog/i })[0];
    const aboutLink = screen.getAllByRole('link', { name: /about/i })[0];
    
    expect(nav).toBeInTheDocument();
    expect(galleryLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  it('renders blog link with correct href', () => {
    render(<RootLayout>{<div>Test content</div>}</RootLayout>);
    
    // Get the first blog link (desktop navigation)
    const blogLinks = screen.getAllByRole('link', { name: /blog/i });
    expect(blogLinks[0]).toHaveAttribute('href', '/blog');
  });

  it('renders with children', () => {
    const testContent = 'Test Content';
    render(<RootLayout>{<div>{testContent}</div>}</RootLayout>);
    
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('toggles mobile menu', async () => {
    render(<RootLayout>{<div>Test content</div>}</RootLayout>);
    
    // Get the menu button
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    expect(menuButton).toBeInTheDocument();
    
    // Initially mobile menu should be hidden
    const mobileNav = screen.getByRole('navigation', { name: /mobile navigation/i });
    expect(mobileNav).toHaveClass('hidden');
    
    // Click menu button to open
    await userEvent.click(menuButton);
    expect(mobileNav).toHaveClass('block');
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    
    // Click again to close
    await userEvent.click(menuButton);
    expect(mobileNav).toHaveClass('hidden');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});