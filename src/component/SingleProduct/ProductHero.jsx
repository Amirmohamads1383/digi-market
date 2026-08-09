import React from 'react'
import ProductGallery from './component/ProductGallery'
import ProductInfo from './component/ProductInfo'

export default function ProductHero({product}) {
  return (
    <section className='container pt-12 lg:pt-16'>
        <div className='flex items-center justify-center gap-6'>
            <ProductGallery product={product}/>
            <ProductInfo />
        </div>
    </section>
  )
}
