import React from 'react'
import products from "@/data/toys.json"
import ProductCard from '../cards/ProductCards'
export default function Products() {
  return (
    <div>
        <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
        <div className='grid md:grid-cols-4 gap-5'>
        {
            products.map(product=>(
               
                   <ProductCard key={product.title} product={product}></ProductCard>
                   
                
            ))
        }
        </div>
    </div>
  )
}
