import GlobalLayout from "@/components/layout/GlobalLayout";
import { Suppliers } from "./Suppliers";

export default function SuppliersPage() {
  return (
    <GlobalLayout title="Fournisseurs">
    <div className="mx-5 py-8">
      <h1 className="text-3xl font-bold mb-6">Gestion des Fournisseurs</h1>
      <Suppliers />
    </div>
    </GlobalLayout>
        
  )
}
