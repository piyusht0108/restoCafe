import React from 'react'

const RestroContext = React.createContext({
  activeCategory: '',
  categoryList: [],
  cartItems: [],
  onItemAdd: () => {},
  changeCategory: () => {},
})

export default RestroContext
