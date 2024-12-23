import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navigation from '@/components/Navigation';

describe('Navigation', () => {
  it('renders desktop navigation links', () => {
    render(<Navigation />);
    
    const galleryLink = screen.getByTestId('desktop-gallery-link');
    const blogLink = screen.getByTestId('desktop-blog-link');
    const aboutLink = screen.getByTestId('desktop-about-link');

    expect(galleryLink).toHaveAttribute('href', '/gallery');
    expect(blogLink).toHaveAttribute('href', '/blog');
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  it('toggles mobile menu visibility', async () => {
    const user = userEvent.setup();
    render(<Navigation />);
    
    const mobileMenu = screen.getByTestId('mobile-menu');
    const menuButton = screen.getByTestId('mobile-menu-button');

    // Initial state - menu should be hidden
    expect(mobileMenu).toHaveClass('hidden');

    // Click to open menu
    await act(async () => {
      await user.click(menuButton);
    });
    expect(mobileMenu).not.toHaveClass('hidden');

    // Click to close menu
    await act(async () => {
      await user.click(menuButton);
    });
    expect(mobileMenu).toHaveClass('hidden');
  });

  it('renders mobile navigation links when menu is open', async () => {
    const user = userEvent.setup();
    render(<Navigation />);
    
    const menuButton = screen.getByTestId('mobile-menu-button');
    
    // Open the mobile menu
    await act(async () => {
      await user.click(menuButton);
    });

    const mobileGalleryLink = screen.getByTestId('mobile-gallery-link');
    const mobileBlogLink = screen.getByTestId('mobile-blog-link');
    const mobileAboutLink = screen.getByTestId('mobile-about-link');

    expect(mobileGalleryLink).toHaveAttribute('href', '/gallery');
    expect(mobileBlogLink).toHaveAttribute('href', '/blog');
    expect(mobileAboutLink).toHaveAttribute('href', '/about');
  });
});