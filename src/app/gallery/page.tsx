'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Artwork {
  id: number;
  title: string;
  description: string;
  image: string;
  prompt: string;
  date: string;
  width: number;
  height: number;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Cherry Blossom Serenity",
    description: "A tranquil Japanese garden at sunset, with cherry blossoms and glowing lanterns creating a peaceful atmosphere.",
    image: "/images/cherry-blossom-garden.webp",
    prompt: "A serene Japanese zen garden at sunset, with a small wooden bridge over a koi pond, surrounded by blooming cherry blossom trees. The scene is rendered in a dreamy, ethereal art style with soft pink and golden lighting.",
    date: "2024-01-05",
    width: 1024,
    height: 1024
  },
  {
    id: 2,
    title: "Cyberpunk Street Scene",
    description: "A neon-lit cityscape with floating vehicles and towering skyscrapers, illuminated by the glow of countless lights and signs.",
    image: "/images/cyberpunk-city.webp",
    prompt: "cyberpunk cityscape with neon lights and floating cars, detailed architecture, volumetric lighting, 8k resolution",
    date: "2024-01-15",
    width: 1024,
    height: 1024
  },
  {
    id: 3,
    title: "Sci-fi City at Sunset",
    description: "A serene floating city bathed in the warm glow of sunset, where nature and technology exist in perfect harmony.",
    image: "/images/zen-garden.webp",
    prompt: "floating futuristic city at sunset, ethereal atmosphere, advanced architecture, natural elements, peaceful",
    date: "2024-01-20",
    width: 1024,
    height: 1024
  },
  {
    id: 4,
    title: "Floating Sanctuary",
    description: "A mystical temple floating among misty mountains, bridging the gap between earth and sky.",
    image: "/images/floating-sanctuary.webp",
    prompt: "floating temple in misty mountains, ethereal atmosphere, ancient architecture, mystical, detailed, peaceful",
    date: "2024-01-25",
    width: 1024,
    height: 1024
  },
  {
    id: 5,
    title: "Geometric Serenity",
    description: "Abstract geometric patterns forming a harmonious composition, blending organic and mathematical forms.",
    image: "/images/geometric-serenity.webp",
    prompt: "abstract geometric patterns, organic shapes, harmony, golden ratio, detailed textures, peaceful atmosphere",
    date: "2024-01-30",
    width: 1024,
    height: 1024
  }
];

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const imageId = searchParams.get('image');
    if (imageId) {
      const artwork = artworks.find(art => art.id === parseInt(imageId));
      if (artwork) {
        setSelectedImage(artwork);
      }
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">AI Art Gallery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedImage(artwork)}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent">
                <h2 className="text-xl font-semibold">{artwork.title}</h2>
                <p className="text-sm mt-1 opacity-90">{artwork.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full">
          <DialogHeader>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
          </DialogHeader>
          <div className="relative aspect-[4/3] w-full">
            {selectedImage && (
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            )}
          </div>
          <div className="space-y-2">
            <p className="text-gray-700">{selectedImage?.description}</p>
            <div className="text-sm text-gray-500">
              <p>Prompt: {selectedImage?.prompt}</p>
              <p>Created: {selectedImage?.date}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryPage;