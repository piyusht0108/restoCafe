import React from 'react'

const CartContext = React.createContext({
  activeCategory: '',
  categoryList: [],
  cartItems: [],
  onItemAdd: () => {},
  changeCategory: () => {},
})

export default CartContext
