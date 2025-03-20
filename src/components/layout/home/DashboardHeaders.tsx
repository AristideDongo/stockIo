import { BoxIcon, DollarSign, ShoppingCart, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardHeader() {
  return (
      <div className="mx-5">
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Produits en Stock</CardTitle>
              <BoxIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248</div>
              <p className="text-xs text-muted-foreground">+20 depuis le mois dernier</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Valeur du Stock</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€124,550</div>
              <p className="text-xs text-muted-foreground">+12.5% depuis le mois dernier</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ventes Effectuées</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-muted-foreground">-4 depuis la semaine dernière</p>
            </CardContent>
          </Card>
        </div>
        {/* <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Mouvements Récents</CardTitle>
              <CardDescription>Les dernières entrées et sorties de stock</CardDescription>
            </CardHeader>
            <CardContent>
              <StockTable />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Exporter</Button>
              <Button asChild>
                <Link href="/mouvements">Voir tous les mouvements</Link>
              </Button>
            </CardFooter>
          </Card>
        </div> */}
      </div>
  )
}

