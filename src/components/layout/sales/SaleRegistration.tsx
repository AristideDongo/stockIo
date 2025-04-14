"use client"
import { useState } from "react"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sale } from "@/types/sales"
import RecentSales from "./RecentSales"
import SalesFormModal from "./modal/SaleFormModal"
import ExcelExport from "@/hooks/ExcelExport"

export default function SalesRegistration() {
  // État pour stocker les ventes
  const [sales, setSales] = useState<Sale[]>([])
  // État pour contrôler l'ouverture du modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Fonction pour ajouter une nouvelle vente
  const addSale = (sale: Sale) => {
    setSales([...sales, { ...sale, date: new Date() }])
  }

  return (
    <div className="grid gap-2 md:grid-cols-1">
      <div className="flex flex-row items-center gap-2 justify-end">
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Nouvelle Vente
          </Button>
          <ExcelExport data={sales} fileName="vente" />
      </div>
      <Card>
        <CardContent>
          <RecentSales sales={sales} />
        </CardContent>
      </Card>

      {/* Modal de formulaire de vente */}
      <SalesFormModal open={isModalOpen} onOpenChange={setIsModalOpen} onSubmit={addSale} />
    </div>
  )
}
