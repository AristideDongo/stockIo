"use client";
import React from "react";
import {
  Home,
  Package,
  CreditCard,
  Users,
  Settings,
  User,
  PowerOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sidelinks = [
  {path: '/', name: 'Tableau de bord', Icon: <Home size={20} className="mr-3" />},
  {path: '/inventory', name: 'Inventaire', Icon: <Package size={20} className="mr-3" />},
  {path: '/sales', name: 'Ventes', Icon: <CreditCard size={20} className="mr-3" />},
  {path: '/suppliers', name: 'Fournisseurs', Icon: <Users size={20} className="mr-3" />},
  {path: '/purchase-history', name: 'Historique d\'achat', Icon: <User size={20} className="mr-3" />},
]

const Sidebar = () => {
  return (
    <div
      className={`h-full w-64 fixed top-0 left-0 text-black p-4 transition-all duration-300 border-r border-gray-400 rounded-r-xl  flex flex-col overflow-hidden`}
    >
      <div className="flex items-center justify-between mb-8">
      <h1 className="text-black text-center text-2xl font-bold">Stock Manager</h1>
      </div>
      <nav className="flex-1">
        {sidelinks.map((link, i) =>(
          <ul key={i} className="space-y-2 text-black ">
          <li>
            <Link
              href={link.path}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {link.Icon}
              <span>{link.name}</span>
            </Link>
          </li>
        </ul>
        ))}
        <div className="pt-40">
          <ul className="space-y-2 text-black">
            <li>
              <Link
                href="#"
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Settings size={20} className="mr-2" />
                <span>Paramètres</span>
              </Link>
            </li>
            <li>
              <Button
                className="flex items-center w-full p-3 rounded-lg bg-black hover:bg-red-700 text-white transition-colors cursor-pointer"
              >
                <PowerOff size={20} className="mr-2" />
                <span>Déconnexion</span>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
