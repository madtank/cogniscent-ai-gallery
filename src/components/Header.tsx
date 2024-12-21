import React from 'react';
import { Menu, X } from 'lucide-react';
import { Alert } from '@/components/ui/alert';

const Header = () => {
  return (
    <>
      <Alert className="rounded-none border-b bg-indigo-500 text-white">
        <p>🎉 CI/CD Test Banner - {new Date().toLocaleString()}</p>
      </Alert>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">CogniscentAI</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;