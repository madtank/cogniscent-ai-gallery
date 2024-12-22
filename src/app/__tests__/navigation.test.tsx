import { render, screen } from '@testing-library/react';
import RootLayout from '../layout';

describe('Navigation', () => {
  it('renders all navigation links', () => {
    render(<RootLayout>{<div>Test content</div>}</RootLayout>);
    
    // Get the desktop navigation container
    const desktopNav = screen.getByRole('navigation');
    const desktopLinks = desktopNav.querySelectorAll('a');
    
    // Check if links exist and have correct hrefs
    expect(desktopLinks[1]).toHaveAttribute('href', '/gallery');
    expect(desktopLinks[2]).toHaveAttribute('href', '/blog');
    expect(desktopLinks[3]).toHaveAttribute('href', '/about');
  });

  it('contains correct link text', () => {
    render(<RootLayout>{<div>Test content</div>}</RootLayout>);
    
    // Look for specific link text in the desktop navigation
    expect(screen.getByText('Gallery')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('includes logo link to home', () => {
    render(<RootLayout>{<div>Test content</div>}</RootLayout>);
    
    const logoLink = screen.getByText('CogniscentAI');
    expect(logoLink).toHaveAttribute('href', '/');
  });
});