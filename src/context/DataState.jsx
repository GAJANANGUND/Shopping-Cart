import React, { useState, useSyncExternalStore } from 'react'
import DataContext from './DataContext'
import { items } from './Data'

const DataState = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  return (
    <DataContext.Provider value={{products, setProducts, cart, setCart}}>{props.children}</DataContext.Provider>
  )
}

export default DataState;
