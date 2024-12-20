import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Category from '../Category'
import RestroContext from '../RestroContext'
import Dishes from '../Dishes'
import './index.css'

const apiStatusConstants = {
  success: 'SUCCESS',
  loading: 'Loading',
  failed: 'FAILED',
  initial: 'initial',
}

class Home extends Component {
  state = {
    categoryList: [],
    activeCategory: '',
    cartItems: [],
    restaurantDetails: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getCategory()
  }

  getCategory = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const dishesApiUrl =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
    const options = {
      method: 'GET',
    }
    const response = await fetch(dishesApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      console.log(data)
      const tableMenuList = data[0].table_menu_list
      const restaurantDetails = data[0]
      const menuCategory = tableMenuList.map(eachItem => eachItem.menu_category)
      this.setState({
        categoryList: menuCategory,
        activeCategory: menuCategory[0],
        restaurantDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failed})
    }
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

  renderSuccessView = () => {
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
        <div className="HomePage">
          <Header />
          <Category
            categoryList={categoryList}
            activeCategory={activeCategory}
          />
          <Dishes restaurantDetails={restaurantDetails} />
        </div>
      </RestroContext.Provider>
    )
  }

  renderLoaderView = () => (
    <div>
      <Loader height="80" width="80" color="#4fa94d" type="TailSpin" />
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.loading:
        return this.renderLoaderView()
      default:
        return null
    }
  }
}

export default Home
