import React from 'react'
import DataContext from './DataContext'

const DataState = (props) => {
  return (
    <DataContext.Provider value={{}}>{props.children}</DataContext.Provider>
  )
}

export default DataState;
