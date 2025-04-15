"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Supplier } from "@/types/suppliers"
import { SupplierTable } from "@/components/layout/suppliers/SuppliersTable"
import { AddSupplierModal } from "@/components/layout/suppliers/AddSuppliersModal"
import { initialSuppliers } from "@/data/suppliers"


export function Suppliers() {
  const [suppliers, setSuppliers] = useState<Supplier[]>(initialSuppliers)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddSupplier = (newSupplier: Omit<Supplier, "id">) => {
    // Générer un ID simple pour le nouveau fournisseur
    const id = (suppliers.length + 1).toString()
    setSuppliers([...suppliers, { ...newSupplier, id }])
    setIsModalOpen(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Liste des Fournisseurs</h2>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un fournisseur
        </Button>
      </div>

      <SupplierTable suppliers={suppliers} />

      <AddSupplierModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddSupplier={handleAddSupplier} />
    </div>
  )
}
