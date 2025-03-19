"use client";
import React from "react";
import {
  Home,
  Package,
  CreditCard,
  Truck,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => {
  return (
    <div
      className={`h-screen w-64 fixed top-0 left-0 bg-gray-900 text-gray-100 p-4 transition-all duration-300 border-r border-gray-800 flex flex-col overflow-hidden`}
    >
      <div className="flex items-center mt-12 justify-between mb-8">
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="flex items-center p-3 rounded-lg bg-gray-800 text-gray-100"
            >
              <Home size={20} className="mr-3" />
              <span>Tableau de bord</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 transition-colors"
            >
              <Package size={20} className="mr-3" />
              <span>Inventaire</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 transition-colors"
            >
              <CreditCard size={20} className="mr-3" />
              <span>Commandes</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 transition-colors"
            >
              <Truck size={20} className="mr-3" />
              <span>Livraisons</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 transition-colors"
            >
              <Users size={20} className="mr-3" />
              <span>Fournisseurs</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 transition-colors"
            >
              <BarChart3 size={20} className="mr-3" />
              <span>Statistiques</span>
            </Link>
          </li>
        </ul>
        <Separator />
        <div className="pt-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 transition-colors"
              >
                <Settings size={20} className="mr-3" />
                <span>Paramètres</span>
              </Link>
            </li>
            <li>
              <Button
                className="flex items-center p-3 rounded-lg hover:bg-red-800 text-gray-400 hover:text-gray-100 transition-colors"
              >
                <LogOut size={20} className="mr-3" />
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
