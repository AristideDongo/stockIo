import React from 'react'
import {
    Bell,
    ChevronDown,
    User,
    Settings,
    HelpCircle,
    Shield,
    PowerOff
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NotificationMenu } from './Notifications';

export default function CallToAction() {
  return (
    <div className="flex items-center space-x-4">
          <NotificationMenu/>

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
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="#" className="flex items-center px-4 py-2 text-red-400 hover:text-red-300">
                <PowerOff size={16} className="mr-2" /> Déconnexion
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
  )
}