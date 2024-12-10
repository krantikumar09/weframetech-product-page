import React from 'react'
import Title from './Title'
import ProductCard from './ProductCard'

const InterestedProducts = () => {
  return (
    <div className='mt-14 px-4'>
        <Title heading="Ces produits pourraient vous intéresser" linkText="Voir toute la collection"/>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  )
}

export default InterestedProducts