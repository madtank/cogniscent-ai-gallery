import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navigation from '@/components/Navigation';

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
  beforeEach(() => {
    // Clear any lingering effects
    jest.clearAllMocks();
  });

  it('renders all desktop navigation links', async () => {
    await act(async () => {
      render(<Navigation />);
    });
    
    const mainNav = screen.getByRole('navigation', { name: /main navigation/i });
    expect(mainNav).toBeInTheDocument();

    const desktopNav = screen.getByRole('navigation', { name: /desktop navigation/i });
    expect(desktopNav).toBeInTheDocument();

    // Check desktop links
    const galleryLink = screen.getByTestId('desktop-gallery-link');
    const blogLink = screen.getByTestId('desktop-blog-link');
    const aboutLink = screen.getByTestId('desktop-about-link');

    expect(galleryLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  it('renders logo link to home', async () => {
    await act(async () => {
      render(<Navigation />);
    });
    
    const logoLink = screen.getByText('CogniscentAI');
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('toggles mobile menu correctly', async () => {
    const user = userEvent.setup();
    await act(async () => {
      render(<Navigation />);
    });
    
    // Get the menu button
    const menuButton = screen.getByTestId('mobile-menu-button');
    expect(menuButton).toBeInTheDocument();
    
    // Initially mobile menu should be hidden
    const mobileNav = screen.getByTestId('mobile-menu');
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

  it('renders mobile navigation links when menu is open', async () => {
    const user = userEvent.setup();
    await act(async () => {
      render(<Navigation />);
    });

    // Open mobile menu
    const menuButton = screen.getByTestId('mobile-menu-button');
    await user.click(menuButton);

    // Check mobile links
    const mobileGalleryLink = screen.getByTestId('mobile-gallery-link');
    const mobileBlogLink = screen.getByTestId('mobile-blog-link');
    const mobileAboutLink = screen.getByTestId('mobile-about-link');

    expect(mobileGalleryLink).toHaveAttribute('href', '/gallery');
    expect(mobileBlogLink).toHaveAttribute('href', '/blog');
    expect(mobileAboutLink).toHaveAttribute('href', '/about');
  });
});