import { Filter, Plus } from "lucide-react";
import React from "react";
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function InventoryFilters() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end">
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filters</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="w-full md:w-auto">
            <Select>
              <SelectTrigger className="w-full border border-black md:w-[180px]">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les catégories</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-auto">
            <Select>
              <SelectTrigger className="w-full border border-black md:w-[180px]">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="in-stock">En stock</SelectItem>
                <SelectItem value="low-stock">Stock faible</SelectItem>
                <SelectItem value="out-of-stock">Rupture</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full md:w-auto">
            <Input type="number"
            placeholder="Quantité min."
            className="w-full border border-black md:w-[150px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
