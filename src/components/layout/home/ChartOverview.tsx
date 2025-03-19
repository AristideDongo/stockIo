"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const stockData = [
    { month: "Jan", inStock: 120, outStock: 85 },
    { month: "Feb", inStock: 150, outStock: 90 },
    { month: "Mar", inStock: 180, outStock: 110 },
    { month: "Apr", inStock: 200, outStock: 130 },
    { month: "May", inStock: 250, outStock: 180 },
    { month: "Jun", inStock: 280, outStock: 220 },
    { month: "Jul", inStock: 300, outStock: 240 },
    { month: "Aug", inStock: 320, outStock: 260 },
    { month: "Sep", inStock: 310, outStock: 250 },
    { month: "Oct", inStock: 290, outStock: 230 },
    { month: "Nov", inStock: 260, outStock: 200 },
    { month: "Dec", inStock: 230, outStock: 170 },
];


export default function ChartOverview() {
  return (
    <Card className="border-none mx-5 shadow-lg">
    <CardHeader className="border-b pb-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <CardTitle className="text-xl font-bold text-black">Graphique des entrés et sortis</CardTitle>
          <CardDescription className="text-black">Regardez vos chiffres avec un graphique</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-6">
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={stockData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                border: "none",
              }}
            />
            <Bar dataKey="inStock" name="Entrés" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="outStock" name="Sorties" fill="#f43f5e" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
  )
}