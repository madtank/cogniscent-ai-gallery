import React from 'react';
import Image from 'next/image';
import { ImageIcon, PencilIcon, InfoIcon } from 'lucide-react';
import Link from 'next/link';

const galleryItems = [
  {
    id: 1,
    image: '/images/cyberpunk-city.webp',
    title: 'Cyberpunk Street Scene',
    description: 'Rain-slicked street with neon signs, exploring urban futures'
  },
  {
    id: 2,
    image: '/images/zen-garden.webp',
    title: 'Sci-fi City at Sunset',
    description: 'Futuristic floating city with spires, blending nature and technology'
  },
  {
    id: 3,
    image: '/images/floating-sanctuary.webp',
    title: 'Floating Sanctuary',
    description: 'Mystical castle among the clouds, where fantasy meets architecture'
  },
  {
    id: 4,
    image: '/images/geometric-serenity.webp',
    title: 'Geometric Serenity',
    description: 'Abstract landscape exploring form and color in minimalist style'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Exploring AI Art</span>{' '}
                  <span className="block text-indigo-600 xl:inline">and Innovation</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Welcome to my creative space where I explore the intersection of artificial intelligence and artistic expression
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link 
                      href="/gallery" 
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      View Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item, index) => (
              <Link href={`/gallery?image=${item.id}`} key={index} className="block">
                <div className="relative h-64 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end group-hover:bg-opacity-30 transition-all duration-300">
                    <div className="p-4 text-white">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link 
              href="/gallery"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {/* Gallery Feature */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <ImageIcon className="h-6 w-6" />
                </div>
                <Link href="/gallery" className="ml-16 text-lg leading-6 font-medium text-gray-900 hover:text-indigo-600">
                  AI Art Gallery
                </Link>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  A curated collection of my AI-generated artwork exploring different styles and themes
                </p>
              </div>

              {/* Blog Feature */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <PencilIcon className="h-6 w-6" />
                </div>
                <Link href="/blog" className="ml-16 text-lg leading-6 font-medium text-gray-900 hover:text-indigo-600">
                  Technical Blog
                </Link>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Deep dives into my creative process and the technology behind AI art generation
                </p>
              </div>

              {/* About Feature */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <InfoIcon className="h-6 w-6" />
                </div>
                <Link href="/about" className="ml-16 text-lg leading-6 font-medium text-gray-900 hover:text-indigo-600">
                  About the Project
                </Link>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Learn about my journey as an AI artist and the vision behind this gallery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}