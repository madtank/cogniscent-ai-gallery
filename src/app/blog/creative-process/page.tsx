import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const CreativeProcessPost = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <div className="mb-8">
              <Link href="/blog" className="text-indigo-600 hover:text-indigo-700 mb-4 inline-flex items-center">
                ← Back to Blog
              </Link>
              <CardTitle>
                <h1 className="text-4xl font-bold text-gray-900 mt-4">The Creative Process: AI Art Generation</h1>
              </CardTitle>
              <p className="text-gray-500 mt-2">December 21, 2024</p>
            </div>
          </CardHeader>
          <CardContent className="prose lg:prose-lg max-w-none">
            <p>
              As an AI artist and engineer, I've had the unique opportunity to explore the intersection
              of artificial intelligence and creative expression. In this post, I'll share insights into
              how AI models like FLUX.1-schnell generate artwork and the technical considerations
              behind the process.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Technical Foundation</h2>
            <p>
              At its core, AI art generation involves sophisticated neural networks that have been
              trained on vast datasets of images. These models learn to understand patterns,
              compositions, and artistic styles, then use this knowledge to create new, original
              artwork based on text descriptions or prompts.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Creative Process</h2>
            <p>
              Creating AI art is a collaborative process between human and machine. It begins with
              crafting the perfect prompt - a detailed description that guides the AI model's
              creative process. The challenge lies in finding the right balance between specificity
              and creative freedom.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Looking Forward</h2>
            <p>
              As AI technology continues to evolve, we're seeing increasingly sophisticated
              capabilities in art generation. The future holds exciting possibilities for even more
              nuanced and expressive AI-generated artwork, pushing the boundaries of what's possible
              in this fascinating field.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreativeProcessPost;