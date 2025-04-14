"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sale } from "@/types/sales"
import { generateUUid } from "@/utils/uuids"

// Schéma de validation pour le formulaire
const formSchema = z.object({
  salesId: z.string(),
  productId: z.string().min(1, "L'ID du produit est requis"),
  productName: z.string().min(1, "Le nom du produit est requis"),
  quantity: z.coerce.number().min(1, "La quantité doit être d'au moins 1"),
  price: z.coerce.number().min(0.01, "Le prix doit être supérieur à 0"),
})

interface SalesFormModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (sale: Sale) => void
}

export default function SalesFormModal({ open, onOpenChange, onSubmit }: SalesFormModalProps) {
  // Initialisation du formulaire avec React Hook Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      salesId: '',
      productId: "",
      productName: "",
      quantity: 1,
      price: 0,
    },
  })

  // Liste fictive de produits pour la démonstration
  const products = [
    { id: "P001", name: "Ordinateur portable", price: 999.99 },
    { id: "P002", name: "Smartphone", price: 499.99 },
    { id: "P003", name: 'Écran 24"', price: 199.99 },
    { id: "P004", name: "Clavier mécanique", price: 89.99 },
    { id: "P005", name: "Souris sans fil", price: 29.99 },
  ]

  // Fonction pour gérer la sélection d'un produit
  const handleProductSelect = (productId: string) => {
    const product = products.find((p) => p.id === productId)
    if (product) {
      form.setValue("productId", product.id)
      form.setValue("productName", product.name)
      form.setValue("price", product.price)
    }
  }

  type data = z.infer<typeof formSchema>

  // Fonction pour soumettre le formulaire
  const handleSubmit = (values: data) => {
    // Générer un salesId unique pour chaque vente
    const salesId = generateUUid('VNT-')

    // Ajouter l'ID et calculer le total
    onSubmit({
      ...values,
      date: new Date(),
      total: values.quantity * values.price,
      salesId, // Ajouter l'ID généré
    })
    
    // Réinitialiser le formulaire après soumission
    form.reset()
    onOpenChange(false) // Ferme le modal après soumission
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Enregistrer une Vente</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="productId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Produit</FormLabel>
                  <Select onValueChange={handleProductSelect} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un produit" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {products.map((product) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantité</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prix unitaire (€)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" min="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button type="submit">Enregistrer la vente</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
