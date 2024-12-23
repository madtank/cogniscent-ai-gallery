'use client';

import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold text-indigo-600">
              CogniscentAI
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8" role="navigation" aria-label="Desktop navigation">
            <a
              href="/gallery"
              data-testid="desktop-gallery-link"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Gallery
            </a>
            <a
              href="/blog"
              data-testid="desktop-blog-link"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Blog
            </a>
            <a
              href="/about"
              data-testid="desktop-about-link"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              About
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              data-testid="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
        data-testid="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="pt-2 pb-3 space-y-1">
          <a
            href="/gallery"
            data-testid="mobile-gallery-link"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            role="menuitem"
          >
            Gallery
          </a>
          <a
            href="/blog"
            data-testid="mobile-blog-link"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            role="menuitem"
          >
            Blog
          </a>
          <a
            href="/about"
            data-testid="mobile-about-link"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            role="menuitem"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}