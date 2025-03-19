"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const movementData = [
  { id: 1, product: "Laptop Dell XPS", type: "in", quantity: 50, date: "2023-06-01", user: "John Doe" },
  { id: 2, product: "iPhone 15 Pro", type: "out", quantity: 25, date: "2023-06-02", user: "Jane Smith" },
  { id: 3, product: "Samsung TV", type: "in", quantity: 30, date: "2023-06-03", user: "Mike Johnson" },
  { id: 4, product: "Logitech Mouse", type: "out", quantity: 100, date: "2023-06-04", user: "Sarah Williams" },
  { id: 5, product: "Mechanical Keyboard", type: "in", quantity: 75, date: "2023-06-05", user: "David Brown" },
]

export default function StockMovementTable() {
  const [activeTab, setActiveTab] = useState("all")
  
  const filteredData = activeTab === "all" 
    ? movementData 
    : movementData.filter(item => item.type === activeTab)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('fr-FR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    }).format(date)
  }
  
  return (
    <Card className="border mt-5 mx-5 rounded-xl shadow-xl overflow-hidden bg-white dark:bg-slate-900">
      <CardHeader className="border-b mx-5 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-bold text-black">
              Mouvements de Stock Récents
            </CardTitle>
            <CardDescription className="text-black mt-1">
              Suivez tous les entrées et sorties de stock
            </CardDescription>
          </div>
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="w-full sm:w-auto"
          >
            <TabsList className="grid grid-cols-3 w-full sm:w-auto bg-white/80 dark:bg-slate-800/80 rounded-lg p-1 shadow-sm">
              <TabsTrigger 
                value="all" 
                className="rounded-md data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Tous
              </TabsTrigger>
              <TabsTrigger 
                value="in" 
                className="rounded-md data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                Entrées
              </TabsTrigger>
              <TabsTrigger 
                value="out" 
                className="rounded-md data-[state=active]:bg-rose-600 data-[state=active]:text-white"
              >
                Sorties
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="p-0 mx-5">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-100 dark:bg-slate-800">
              <TableRow>
                <TableHead className="font-bold text-slate-700 dark:text-slate-300 py-4">Produit</TableHead>
                <TableHead className="font-bold text-slate-700 dark:text-slate-300">Type</TableHead>
                <TableHead className="font-bold text-slate-700 dark:text-slate-300">Quantité</TableHead>
                <TableHead className="font-bold text-slate-700 dark:text-slate-300">Date</TableHead>
                <TableHead className="font-bold text-slate-700 dark:text-slate-300">Utilisateur</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="p-2">
              {filteredData.length > 0 ? (
                filteredData.map((movement) => (
                  <TableRow 
                    key={movement.id} 
                    className="hover:bg-blue-50 transition-colors duration-150"
                  >
                    <TableCell className="font-medium text-slate-800 dark:text-slate-200">{movement.product}</TableCell>
                    <TableCell>
                      {movement.type === "in" ? (
                        <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none dark:bg-emerald-900/70 dark:text-emerald-300 px-3 py-1 font-medium">
                          ↑ Entrée
                        </Badge>
                      ) : (
                        <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-100 border-none dark:bg-rose-900/70 dark:text-rose-300 px-3 py-1 font-medium">
                          ↓ Sortie
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-slate-800 font-medium">
                      {movement.quantity}
                    </TableCell>
                    <TableCell className="text-slate-600 dark:text-slate-400">
                      {formatDate(movement.date)}
                    </TableCell>
                    <TableCell className="text-slate-700 dark:text-slate-300">
                      {movement.user}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-slate-500 dark:text-slate-400">
                    Aucun mouvement de stock trouvé pour ce filtre
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}