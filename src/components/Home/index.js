import {Component} from 'react'
import Header from '../Header'
import Category from '../Category'
import RestroContext from '../RestroContext'
import Dishes from '../Dishes'
import {HomePage} from './styledComponents'

class Home extends Component {
  state = {
    categoryList: [],
    activeCategory: '',
    cartItems: [],
    restaurantDetails: {},
  }

  componentDidMount() {
    this.getCategory()
  }

  getCategory = async () => {
    const apiUrl =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const tableMenuList = data[0].table_menu_list
    const restaurantDetails = data[0]
    const menuCategory = tableMenuList.map(eachItem => eachItem.menu_category)
    this.setState({
      categoryList: menuCategory,
      activeCategory: menuCategory[0],
      restaurantDetails,
    })
  }

  onChangeCategory = selectedCategory => {
    this.setState({activeCategory: selectedCategory})
  }

  addToCartItem = (id, item, quantity) => {
    const {cartItems} = this.state
    const itemList = cartItems.filter(eachItem => eachItem.dish_id === id)

    if (itemList.length === 0) {
      const newQuantity = quantity + 1
      this.setState(prevState => ({
        cartItems: [...prevState.cartItems, {...item, quantity: newQuantity}],
      }))
    } else {
      const filteredList = cartItems.filter(eachItem => eachItem.dish_id !== id)
      const newQuantity = quantity + 1
      this.setState({
        cartItems: [...filteredList, {...item, quantity: newQuantity}],
      })
    }
  }

  removeFromCartItem = (id, item, quantity) => {
    const {cartItems} = this.state
    const filteredList = cartItems.filter(eachItem => eachItem.dish_id !== id)
    if (quantity === 1) {
      this.setState({cartItems: [...filteredList]})
    } else {
      const newQuantity = quantity - 1
      this.setState({
        cartItems: [...filteredList, {...item, quantity: newQuantity}],
      })
    }
  }

  render() {
    const {
      categoryList,
      activeCategory,
      restaurantDetails,
      cartItems,
    } = this.state
    return (
      <RestroContext.Provider
        value={{
          categoryList,
          restaurantDetails,
          activeCategory,
          cartItems,
          addToCartItem: this.addToCartItem,
          removeFromCartItem: this.removeFromCartItem,
          changeCategory: this.onChangeCategory,
        }}
      >
        <HomePage>
          <Header />
          <Category
            categoryList={categoryList}
            activeCategory={activeCategory}
          />
          <Dishes />
        </HomePage>
      </RestroContext.Provider>
    )
  }
}

export default Home
