import React, { useContext, useState } from 'react'
import { FaMobileAlt, FaLaptop, FaTabletAlt, FaClock, FaThLarge, FaRubleSign } from 'react-icons/fa'
import DataContext from '../context/DataContext'
import { items } from '../context/Data'

const categories = [

  { name: "All Products", icons: <FaThLarge /> },
  { name: "Mobiles", icons: <FaMobileAlt /> },
  { name: "Laptops", icons: <FaLaptop /> },
  { name: "Tablets", icons: <FaTabletAlt /> },
  { name: "Watches", icons: <FaClock /> },
]

const priceRanges = [30000, 40000, 50000, 60000, 70000, 80000]

const ShopByCategory = () => {

  const { setProducts } = useContext(DataContext);
  const [selectedPrice, setSelectedPrice] = useState(80000);
  return (
    <div className="container bg-dark text-light my-4 p-4 rounded">
      <h3 className='text-center mb-3'>Filter Products</h3>
      <div className='d-flex flex-wrap justify-content-center align-items-center gap-3 mb-4'>
        {categories.map(({ name, icons }) => <div key={name} className='d-flex align-items-center gap-2 px-3 py2 rounded bg-secondary text-light fw-bold' style={{ cursor: 'pointer' }}>
          {icons} <span>{name}</span>
        </div>)}

      </div>

    </div>
  )
}

export default ShopByCategory
