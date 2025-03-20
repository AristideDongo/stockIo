"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

//schéma de validation
const productFormSchema = z.object({
  productId: z.string().min(1, "La référence est requise"),
  name: z.string().min(1, "Le nom du produit est requis"),
  category: z.string().min(1, "La catégorie est requise"),
  price: z.string().min(0, "Le prix doit être positif"),
  quantity: z.string().min(0, "La quantité doit être un nombre entier positif"),
  description: z.string().optional(),
  supplier: z.string().optional(),
})

type ProductFormValues = z.infer<typeof productFormSchema>


const defaultValues: Partial<ProductFormValues> = {
  productId: "",
  name: "",
  category: "",
  price: '0',
  quantity: '0',
  description: "",
  supplier: "",
}

export function AddProductModal() {
  const [open, setOpen] = useState(false)

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues,
  })

  function onSubmit(data: ProductFormValues) {
    console.log(data)
    setOpen(false)
    form.reset()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-black transition-colors">
          <Plus className="h-4 w-4" />
          Ajouter un produit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Ajouter un nouveau produit</DialogTitle>
          <DialogDescription>Remplissez les informations du produit à ajouter à l'inventaire.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="productId"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Référence</FormLabel>
                  <div className="col-span-3">
                    <FormControl>
                      <Input placeholder="PRD000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Nom du produit</FormLabel>
                  <div className="col-span-3">
                    <FormControl>
                      <Input placeholder="Nom du produit" {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Catégorie</FormLabel>
                  <div className="col-span-3">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner une catégorie" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="electronics">Électronique</SelectItem>
                        <SelectItem value="accessories">Accessoires</SelectItem>
                        <SelectItem value="audio">Audio</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Prix (€)</FormLabel>
                  <div className="col-span-3">
                    <FormControl>
                      <Input type="number" placeholder="0.00" step="0.01" min="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Quantité</FormLabel>
                  <div className="col-span-3">
                    <FormControl>
                      <Input type="number" placeholder="0" min="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Description</FormLabel>
                  <div className="col-span-3">
                    <FormControl>
                      <Textarea placeholder="Description du produit" rows={3} {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="supplier"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel className="text-right">Fournisseur</FormLabel>
                  <div className="col-span-3">
                      <FormControl>
                      <Input type="text" placeholder="Fournisseur" {...field}/>
                      </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setOpen(false)
                  form.reset()
                }}
              >
                Annuler
              </Button>
              <Button type="submit">Ajouter</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

