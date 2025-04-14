import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Sale } from "@/types/sales"
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface RecentSalesProps {
  sales: Sale[]
}

export default function RecentSales({ sales }: RecentSalesProps) {
  if (sales.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
        <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="text-left">Référence</TableHead>
            <TableHead>Produit</TableHead>
            <TableHead className="text-right">Qté</TableHead>
            <TableHead className="text-right">Prix</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        </Table>
        <p className="mt-5">Aucune vente enregistrée</p>
        <p className="text-sm">Les ventes apparaîtront ici une fois enregistrées</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="text-left">Référence</TableHead>
            <TableHead>Produit</TableHead>
            <TableHead className="text-right">Qté</TableHead>
            <TableHead className="text-right">Prix</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sales.map((sale, index) => (
            <TableRow key={index}>
              <TableCell className="text-left uppercase">{sale.salesId}</TableCell>
              <TableCell className="font-medium">{sale.productName}</TableCell>
              <TableCell className="text-right">{sale.quantity}</TableCell>
              <TableCell className="text-right">{sale.price.toFixed(2)} €</TableCell>
              <TableCell className="text-right">{sale.total.toFixed(2)} €</TableCell>
              <TableCell className="text-right">
                {format(sale.date, 'dd/MM/yyyy HH:mm' ,{locale: fr})}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
