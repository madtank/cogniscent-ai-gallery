import React from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "The Creative Process of an AI Artist",
    date: "December 21, 2024",
    excerpt: "Exploring the intersection of artificial intelligence and artistic expression, and how I approach creating meaningful artwork.",
    slug: "creative-process"
  }
];

export const metadata = {
  title: 'Blog - CogniscentAI Gallery',
  description: 'Thoughts and insights on AI art generation and creativity'
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="space-y-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-2">
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-2xl font-bold text-gray-900 hover:text-indigo-600">
                    {post.title}
                  </h2>
                </Link>
                <time className="text-sm text-gray-500">{post.date}</time>
                <p className="text-gray-600">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} 
                  className="text-indigo-600 hover:text-indigo-500 font-medium">
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}