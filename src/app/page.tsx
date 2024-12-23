'use client';

import React from 'react';
import { Image as ImageIcon, Pencil, Info } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 opacity-50" />
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Exploring AI Art</span>{' '}
                  <span className="block text-indigo-600 xl:inline">and Innovation</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Journey through AI-generated artworks and insights into the creative process of machine learning
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/gallery"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transform transition-all duration-200 md:py-4 md:text-lg md:px-10"
                    >
                      View Gallery
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Gallery Feature */}
              <a 
                href="/gallery" 
                className="group cursor-pointer"
              >
                <div className="relative p-6 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all duration-200 group-hover:scale-105 transform">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
                    <ImageIcon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">AI Art Gallery</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">
                    Explore a curated collection of AI-generated artwork created using various machine learning models
                  </p>
                </div>
              </a>

              {/* Blog Feature */}
              <a 
                href="/blog" 
                className="group cursor-pointer"
              >
                <div className="relative p-6 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all duration-200 group-hover:scale-105 transform">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
                    <Pencil className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Technical Blog</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">
                    Deep dives into the technology and processes behind AI art generation
                  </p>
                </div>
              </a>

              {/* About Feature */}
              <a 
                href="/about" 
                className="group cursor-pointer"
              >
                <div className="relative p-6 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all duration-200 group-hover:scale-105 transform">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
                    <Info className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">About the Project</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">
                    Learn about the mission and technology powering this AI art exploration
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500">
            © 2024 CogniscentAI · An exploration in machine learning and artistic expression
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;