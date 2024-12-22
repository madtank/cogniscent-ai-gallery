import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@/components/ui/dialog';

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

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);

  const artworks: Artwork[] = [
    {
      id: 1,
      title: "Cyberpunk City",
      description: "A neon-lit cityscape with floating vehicles",
      image: "/images/cyberpunk-city.webp",
      prompt: "cyberpunk cityscape with neon lights and floating cars, detailed architecture",
      date: "2024-01-15",
      width: 1024,
      height: 1024
    },
    // Add more artworks here
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">AI Art Gallery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            onClick={() => setSelectedImage(artwork)}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{artwork.title}</h2>
              <p className="text-gray-600 mt-2">{artwork.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{selectedImage.title}</h2>
            <div className="relative aspect-square w-full max-w-3xl mx-auto">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
            <div className="mt-4">
              <p className="text-gray-700 mb-2">{selectedImage.description}</p>
              <p className="text-sm text-gray-500">Prompt: {selectedImage.prompt}</p>
              <p className="text-sm text-gray-500">Created: {selectedImage.date}</p>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default GalleryPage;