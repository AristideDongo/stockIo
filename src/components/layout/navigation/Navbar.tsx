'use client'
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import CallToAction from '@/components/common/CallToAction';


const Navbar = () => {
  return (
    <header className="h-16 ml-64 bg-white border-b border-gray-400 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="relative w-[300px]">
        <Input
          type="text"
          placeholder="Rechercher un produit, une commande..."
          className="w-full text-black border-black border pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
        />
        <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
      </div>
        <CallToAction/>
    </header>
  );
};

export default Navbar;