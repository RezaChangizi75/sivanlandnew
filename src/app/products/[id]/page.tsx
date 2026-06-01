import { product } from '@/feature/products/data/mockdata'
import { ProductHeroSection } from '@/feature/products/productDetails/sections/ProductHeroSection/ProductHeroSection'
import React from 'react'

function ProductId() {
    return (
        <ProductHeroSection product={product} />
      )
  
}

export default ProductId