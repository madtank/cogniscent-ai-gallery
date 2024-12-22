'use client';

import React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    title: string;
    description: string;
    image: string;  // Changed from src to match our data structure
    prompt?: string;
    date?: string;
    width: number;
    height: number;
  };
}

const ImageModal = ({ isOpen, onClose, image }: ImageModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{image.title}</DialogTitle>
          {image.date && (
            <DialogDescription className="text-sm text-gray-500">
              Created on {image.date}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="relative w-full max-h-[70vh] overflow-hidden rounded-lg">
          <Image
            src={image.image}  // Changed from src to image
            alt={image.title}
            width={1024}
            height={1024}
            className="object-contain w-full h-full"
            priority
          />
        </div>
        <div className="space-y-4 mt-4">
          <p className="text-gray-700">{image.description}</p>
          {image.prompt && (
            <div>
              <h4 className="font-semibold mb-2">Generation Prompt:</h4>
              <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-md">{image.prompt}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;