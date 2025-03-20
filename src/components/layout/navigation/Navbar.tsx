'use client'
import React, { useState } from 'react';
import {
  Search,
  Bell,
  ChevronDown,
  User,
  Settings,
  LogOut,
  HelpCircle,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

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

      <div className="flex items-center space-x-4">
        <Button className="p-2 rounded-lg bg-gray-300 hover:bg-gray-400 relative">
          <Bell size={30} className='text-black' />
            <span className="absolute -top-1 -right-1 bg-red-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                10
            </span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2 py-6 px-5 rounded-lg bg-gray-300 hover:bg-gray-400">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <User size={18} />
              </div>
              <span className="font-medium text-black">Admin</span>
              <ChevronDown size={16} className="text-black" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg text-gray-100">
            <DropdownMenuLabel>
              <div className="px-4 py-2">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-400">admin@stockmanager.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="#" className="flex items-center px-4 py-2">
                <User size={16} className="mr-2" /> Mon profil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#" className="flex items-center px-4 py-2">
                <Settings size={16} className="mr-2" /> Paramètres du compte
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#" className="flex items-center px-4 py-2">
                <Shield size={16} className="mr-2" /> Sécurité
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#" className="flex items-center px-4 py-2">
                <HelpCircle size={16} className="mr-2" /> Aide & Support
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="#" className="flex items-center px-4 py-2 text-red-400 hover:text-red-300">
                <LogOut size={16} className="mr-2" /> Déconnexion
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;