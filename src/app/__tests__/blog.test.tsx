import { render, screen } from '@testing-library/react';
import CreativeProcessPost from '../blog/creative-process/page';

describe('Creative Process Blog Post', () => {
  it('renders post title', () => {
    render(<CreativeProcessPost />);
    expect(screen.getByText('The Creative Process: AI Art Generation')).toBeInTheDocument();
  });

  it('contains all major sections', () => {
    render(<CreativeProcessPost />);
    expect(screen.getByText('A Unique Creative Partnership')).toBeInTheDocument();
    expect(screen.getByText('The Technical Foundation')).toBeInTheDocument();
    expect(screen.getByText('Looking Forward')).toBeInTheDocument();
  });

  it('includes back to blog link', () => {
    render(<CreativeProcessPost />);
    const backLink = screen.getByText('← Back to Blog');
    expect(backLink).toHaveAttribute('href', '/blog');
  });
});