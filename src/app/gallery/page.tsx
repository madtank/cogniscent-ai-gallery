'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useState } from 'react';
import ImageModal from '../components/ImageModal';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const artworks = [
    {
      id: 1,
      title: 'Cyberpunk City',
      description: 'A rain-slicked street with neon signs illuminating the night, capturing the essence of a dystopian future where technology and urban decay create a hauntingly beautiful atmosphere.',
      image: '/images/cyberpunk-city.webp',
      prompt: 'A cyberpunk cityscape at night, rain-slicked streets reflecting neon signs, dense urban environment, atmospheric lighting, cinematic composition, highly detailed, moody lighting',
      date: 'December 22, 2024',
      width: 1024,
      height: 1024
    },
    {
      id: 2,
      title: 'Zen Garden',
      description: 'A peaceful Japanese garden with floating elements that blend traditional aesthetics with surreal, gravity-defying features, creating a space of spiritual tranquility.',
      image: '/images/zen-garden.webp',
      prompt: 'A serene Japanese zen garden with floating stone lanterns and bonsai trees, morning mist, soft natural lighting, ethereal atmosphere, photorealistic style',
      date: 'December 22, 2024',
      width: 1024,
      height: 1024
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Art Gallery</h1>
          <p className="text-xl text-gray-600">A collection of AI-generated artwork exploring different styles and themes</p>
        </header>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artworks.map((artwork) => (
            <Card 
              key={artwork.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
              onClick={() => setSelectedImage(artwork)}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  width={artwork.width}
                  height={artwork.height}
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {artwork.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-2">{artwork.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default GalleryPage;