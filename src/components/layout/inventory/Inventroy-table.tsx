import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Ellipsis } from 'lucide-react';

export default function InventoryTable() {
    const products = [
        {
          id: "PRD001",
          name: "Ordinateur portable",
          category: "Électronique",
          price: 899.99,
          quantity: 24,
          status: "En stock",
        },
        {
          id: "PRD002",
          name: "Écran 27 pouces",
          category: "Électronique",
          price: 249.99,
          quantity: 15,
          status: "En stock",
        },
        {
          id: "PRD003",
          name: "Clavier mécanique",
          category: "Accessoires",
          price: 89.99,
          quantity: 42,
          status: "En stock",
        },
        {
          id: "PRD004",
          name: "Souris sans fil",
          category: "Accessoires",
          price: 39.99,
          quantity: 8,
          status: 'En Stock'
        },
        {
          id: "PRD005",
          name: "Casque audio",
          category: "Audio",
          price: 129.99,
          quantity: 0,
          status: "Rupture",
        },
      ];

    const isLowStock = (quantity: number) => quantity <= 10 && quantity > 0;
    const isOutOfStock = (quantity: number) => quantity === 0;

    const renderStockStatus = (quantity: number) => {
        if (isOutOfStock(quantity)) {
            return (
                <Badge variant="destructive" className="flex items-center gap-1">
                    <AlertTriangle size={14} />
                    Rupture
                </Badge>
            );
        } else if (isLowStock(quantity)) {
            return (
                <Badge variant="warning" className="flex items-center gap-1 bg-amber-100 text-amber-700 hover:bg-amber-100">
                    <AlertTriangle size={14} />
                    Stock bas
                </Badge>
            );
        } else {
            return (
                <Badge variant="outline" className="bg-green-100 text-green-700 hover:bg-green-100">
                    En stock
                </Badge>
            );
        }
    };

  return (
   <div className="rounded-md border">
    <Table>
        <TableHeader>
            <TableRow className='bg-gray-100'>
                <TableHead>Référence</TableHead>
                <TableHead>Produit</TableHead>
                <TableHead>Catégories</TableHead>
                <TableHead className='text-right'>Prix</TableHead>
                <TableHead className='text-right'>Quantité</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead></TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {products.map((product) =>(
                <TableRow key={product.id} className={isOutOfStock(product.quantity) ? 'bg-red-50' : isLowStock(product.quantity) ? 'bg-amber-50' : ''}>
                    <TableCell className='font-medium'>
                        {product.id}
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell className='text-right'>{product.price.toFixed(2)} FCFA</TableCell>
                    <TableCell className='text-right'>{product.quantity}</TableCell>
                    <TableCell>
                        {renderStockStatus(product.quantity)}
                    </TableCell>
                    <TableCell className='text-right'>
                        <div className="flex justify-end gap-2">
                            <Button variant='ghost' size='icon'>
                                <Ellipsis size={20} />
                            </Button>
                        </div>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
   </div>
  );
}