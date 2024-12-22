'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-white shadow-sm" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              CogniscentAI
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8" role="navigation" aria-label="Desktop navigation">
            <Link 
              href="/gallery" 
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              data-testid="desktop-gallery-link"
            >
              Gallery
            </Link>
            <Link 
              href="/blog" 
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              data-testid="desktop-blog-link"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              data-testid="desktop-about-link"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          {mounted && (
            <div className="sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                aria-expanded={isMenuOpen}
                aria-haspopup="true"
                aria-label="Toggle menu"
                data-testid="mobile-menu-button"
              >
                <span className="sr-only">Toggle menu</span>
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {mounted && (
          <div 
            className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
            role="navigation"
            aria-label="Mobile navigation"
            data-testid="mobile-menu"
          >
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/gallery"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                data-testid="mobile-gallery-link"
              >
                Gallery
              </Link>
              <Link
                href="/blog"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                data-testid="mobile-blog-link"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                data-testid="mobile-about-link"
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}