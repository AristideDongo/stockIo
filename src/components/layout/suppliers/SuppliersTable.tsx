import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Supplier } from "@/types/suppliers"


interface SupplierTableProps {
  suppliers: Supplier[]
}

export function SupplierTable({ suppliers }: SupplierTableProps) {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead>N°</TableHead>
            <TableHead>Nom</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="hidden md:table-cell">Téléphone</TableHead>
            <TableHead className="hidden md:table-cell">Adresse</TableHead>
            <TableHead className="hidden lg:table-cell">Catégorie</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                Aucun fournisseur trouvé
              </TableCell>
            </TableRow>
          ) : (
            suppliers.map((supplier) => 
            <TableRow key={supplier.id}>
            <TableCell>{supplier.id}</TableCell>
            <TableCell className="font-medium">{supplier.name}</TableCell>
            <TableCell className="hidden md:table-cell">{supplier.email}</TableCell>
            <TableCell className="hidden md:table-cell">{supplier.phone}</TableCell>
            <TableCell className="hidden lg:table-cell">{supplier.address}</TableCell>
            <TableCell>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {supplier.category}
              </span>
            </TableCell>
          </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  )
}
