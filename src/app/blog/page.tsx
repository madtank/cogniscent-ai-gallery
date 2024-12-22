import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'creative-process',
    title: 'The Creative Process: AI Art Generation',
    excerpt: 'An exploration of how AI models generate unique artwork and the technical process behind it.',
    date: '2024-12-21'
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">Insights into AI art generation and technical explorations</p>
        </header>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-200"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
                <p className="text-sm text-gray-500">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-700"
                >
                  Read more
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;