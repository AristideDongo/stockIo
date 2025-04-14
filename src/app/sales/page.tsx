import GlobalLayout from '@/components/layout/GlobalLayout'
import SalesRegistration from '@/components/layout/sales/SaleRegistration'
import React from 'react'


export default function SalesPage() {
  return (
    <GlobalLayout title='Sales'>
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Ventes</h1>
      <SalesRegistration />
    </main>
    </GlobalLayout>
  )
}