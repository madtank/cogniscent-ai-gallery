import React from 'react';
import Navigation from '../components/Navigation';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          <Navigation />

          {/* Main content */}
          <main>{children}</main>

          {/* Footer */}
          <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-base text-gray-400">
                  © {new Date().getFullYear()} CogniscentAI
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}