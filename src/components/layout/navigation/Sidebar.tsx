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
  User,
  Package2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => {
  return (
    <div
      className={`h-full w-64 fixed top-0 left-0 text-black p-4 transition-all duration-300 border-r border-gray-400 rounded-r-xl  flex flex-col overflow-hidden`}
    >
      <div className="flex items-center justify-between mb-8">
      <h1 className="text-black text-center text-2xl font-bold">Stock Manager</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 text-black ">
          <li>
            <Link
              href="/"
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Home size={20} className="mr-3" />
              <span>Tableau de bord</span>
            </Link>
          </li>
          <li>
            <Link
              href="inventory"
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Package size={20} className="mr-3" />
              <span>Inventaire</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <CreditCard size={20} className="mr-3" />
              <span>Ventes</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Truck size={20} className="mr-3" />
              <span>Livraisons</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <User size={20} className="mr-3" />
              <span>Fournisseurs</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Users size={20} className="mr-3" />
              <span>Clients</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <BarChart3 size={20} className="mr-3" />
              <span>Rapports</span>
            </Link>
          </li>
        </ul>
        <Separator className="bg-gray-400 mt-2" />
        <div className="pt-4">
          <ul className="space-y-2 text-black">
            <li>
              <Link
                href="#"
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Settings size={20} className="mr-3" />
                <span>Paramètres</span>
              </Link>
            </li>
            <li>
              <Button
                className="flex items-center p-3 rounded-lg bg-black hover:bg-red-700 text-white transition-colors"
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
