import { Supplier } from "@/types/suppliers";

export const initialSuppliers: Supplier[] = [
  {
    id: "1",
    name: "Jean Dupont",
    email: "contact@fournisseura.com",
    phone: "01 23 45 67 89",
    address: "123 Rue de Paris, 75001 Paris",
    category: "Électronique",
  },
  {
    id: "2",
    name: "Marie Martin",
    email: "info@fournisseurb.com",
    phone: "01 98 76 54 32",
    address: "456 Avenue des Champs-Élysées, 75008 Paris",
    category: "Alimentaire",
  },
  {
    id: "3",
    name: "Pierre Durand",
    email: "contact@fournisseurc.com",
    phone: "01 45 67 89 10",
    address: "789 Boulevard Haussmann, 75009 Paris",
    category: "Textile",
  },
]