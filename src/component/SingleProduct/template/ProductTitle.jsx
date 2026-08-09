import React from 'react'

export default function ProductTitle({productTitle, productTitleEn}) {
  return (
    <div className='col-span-2 flex flex-col gap-3 p-4 bg-white border border-Caption/35 rounded-xl'>
        <h1 className='text-lg/relaxed md:text-xl font-bold text-Title'>{productTitle}</h1>
        <h3 className='text-sm md:text-base font-medium text-Caption'>{productTitleEn}</h3>
    </div>
  )
}
