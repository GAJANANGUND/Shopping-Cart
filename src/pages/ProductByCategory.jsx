import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
import Products from '../components/Products'
import { useParams } from 'react-router'
import { Videos } from '../context/Data'
import { items } from '../context/Data'

const ProductByCategory = () => {
  const { cat } = useParams();
  const videoByCategory = Videos.find(vid => vid.category.toLowerCase() === cat.toLowerCase());
  const productsByCategory = items.filter(pro => pro.category.toLowerCase() === cat.toLowerCase());
  // console.log("useParmas =",useParams())
  return (
    <div>
      <VideoPlayer src={videoByCategory.url} />
      <Products items={productsByCategory} />
    </div>
  )
}

export default ProductByCategory
