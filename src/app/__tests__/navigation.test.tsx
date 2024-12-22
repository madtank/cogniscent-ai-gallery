import { render, screen } from '@testing-library/react';
import Navigation from '@/components/Navigation';

describe('Navigation', () => {
  it('renders all navigation links', () => {
    render(<Navigation />);
    
    // Get the desktop navigation container
    const desktopNav = screen.getByRole('navigation');
    const desktopLinks = desktopNav.querySelectorAll('a');
    
    // Check if links exist and have correct hrefs
    expect(desktopLinks[1]).toHaveAttribute('href', '/gallery');
    expect(desktopLinks[2]).toHaveAttribute('href', '/blog');
    expect(desktopLinks[3]).toHaveAttribute('href', '/about');
  });

  it('contains correct link text', () => {
    render(<Navigation />);
    
    // Look for specific link text in the desktop navigation
    const desktopNav = screen.getByRole('navigation');
    const desktopMenu = desktopNav.querySelector('.sm\\:flex');
    
    expect(desktopMenu?.textContent).toContain('Gallery');
    expect(desktopMenu?.textContent).toContain('Blog');
    expect(desktopMenu?.textContent).toContain('About');
  });

  it('includes logo link to home', () => {
    render(<Navigation />);
    
    const logoLink = screen.getByText('CogniscentAI');
    expect(logoLink).toHaveAttribute('href', '/');
  });
});