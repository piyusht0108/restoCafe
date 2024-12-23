import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Category from '../Category'
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
    apiStatus: apiStatusConstants.initial,
    activeCategory: '',
    restaurantDetails: {},
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
      const tableMenuList = data[0].table_menu_list
      const restaurantDetails = data[0]
      const menuCategory = tableMenuList.map(eachItem => eachItem.menu_category)
      this.setState({
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

  renderSuccessView = () => {
    const {activeCategory, restaurantDetails} = this.state
    return (
      <div className="HomePage">
        <Header />
        <Category
          activeCategory={activeCategory}
          restaurantDetails={restaurantDetails}
          onChangeCategory={this.onChangeCategory}
        />
        <Dishes
          activeCategory={activeCategory}
          restaurantDetails={restaurantDetails}
        />
      </div>
    )
  }

  renderLoaderView = () => (
    <div className="loader-container">
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
