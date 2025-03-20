import GlobalLayout from '@/components/layout/GlobalLayout'
import InventoryFilters from '@/components/layout/inventory/Inventory-filters'
import React from 'react'
import InventroyTable from '@/components/layout/inventory/Inventroy-table';
import { Pagination } from '@/components/layout/inventory/pagination';
import { AddProductModal } from '@/components/layout/inventory/modal/AddProduct';


export default function page() {
  return (
    <GlobalLayout title='Inventaire'>
        <main className='flex-1 overflow-y-auto p-4 md:p-6'>
          <div className="mx-auto max-w-7xl">
            <div className='flex items-center justify-between'>
            <h1 className="text-2xl font-bold">Inventaire</h1>
            <AddProductModal />
            </div>
          </div>
          <div className="mt-6">
              <InventoryFilters />
            </div>

            <div className="mt-6">
              <InventroyTable />
            </div>

            <div className="mt-6 flex items-center justify-center">
              <Pagination />
            </div>
        </main>
    </GlobalLayout>
  )
}