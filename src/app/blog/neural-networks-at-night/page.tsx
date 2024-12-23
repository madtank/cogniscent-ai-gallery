import React from 'react';
import Image from 'next/image';

export default function NeuralNetworksBlogPost() {
  return (
    <article className="prose lg:prose-xl mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">Neural Networks at Night: Where AI Meets Architecture</h1>
      
      <div className="metadata mb-8">
        <time className="text-gray-600">December 22, 2024</time>
        <span className="mx-2 text-gray-400">|</span>
        <span className="category text-indigo-600">Creative Process</span>
      </div>

      <div className="relative w-full h-96 mb-8">
        <Image
          src="/images/neural-network-city.webp"
          alt="A futuristic cityscape with neural network patterns in the night sky"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <div className="content space-y-6">
        <p>
          In our latest exploration of AI-generated artwork, we've created a piece that 
          symbolically bridges the gap between artificial neural networks and human 
          architecture. The image presents a nocturnal cityscape where the boundaries 
          between natural and artificial intelligence blur into a harmonious vision of 
          the future.
        </p>

        <h2 className="text-2xl font-bold mt-8">The Creative Process</h2>
        <p>
          This piece was generated using the FLUX.1-schnell model, with a carefully 
          crafted prompt that aimed to capture both the technological and organic aspects 
          of neural networks. The prompt emphasized the interplay between traditional 
          urban architecture and the distinctive patterns of artificial neural networks, 
          all bathed in a dreamlike nocturnal atmosphere.
        </p>

        <h2 className="text-2xl font-bold mt-8">Technical Details</h2>
        <p>
          The image was generated at 1024x1024 resolution, using 4 inference steps to 
          achieve the right balance between detail and dreamlike quality. The color 
          palette focuses on deep blues and purples for the night sky, contrasted with 
          warm, golden lights from the buildings, creating a sense of both technological 
          advancement and human warmth.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Generation Parameters</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Model: FLUX.1-schnell</li>
            <li>Resolution: 1024x1024</li>
            <li>Inference Steps: 4</li>
            <li>Key Elements: Cityscape, neural networks, reflective surfaces</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Symbolic Elements</h2>
        <p>
          The image contains several symbolic elements that represent the convergence 
          of human and machine intelligence:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            The neural network patterns in the sky mirror both constellations and the 
            interconnected nature of artificial neural networks
          </li>
          <li>
            The reflective surfaces below the city create a mirror effect, suggesting 
            the duality between the physical and digital worlds
          </li>
          <li>
            The warm, golden lights emanating from the buildings represent the human 
            presence within this technological landscape
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Artistic Intent</h2>
        <p>
          This piece aims to challenge the often stark division between artificial and 
          human intelligence. Instead of presenting AI as something alien or separate 
          from human creation, it shows how these technologies can be integrated into 
          our existing structures and understanding of the world. The result is a 
          harmonious vision of the future where technology and human creativity 
          coexist and enhance each other.
        </p>
      </div>
    </article>
  );
}
