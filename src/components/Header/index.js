import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import CartContext from '../RestroContext'
import './index.css'

class Header extends Component {
  state = {restaurantDetails: {}}

  componentDidMount() {
    this.getCategory()
  }

  getCategory = async () => {
    const dishesApiUrl =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
    const options = {
      method: 'GET',
    }
    const response = await fetch(dishesApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const restaurantDetails = data[0]
      this.setState({
        restaurantDetails,
      })
    }
  }

  onClickCart = () => {
    const {history} = this.props
    history.push('/cart')
  }

  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {restaurantDetails} = this.state
          const {cartList} = value
          return (
            <div className="HeaderContainer">
              <Link className="nav-link" to="/">
                <h1 className="HeaderHeading">
                  {restaurantDetails.restaurant_name}
                </h1>
              </Link>
              <div className="CartContainer">
                <p className="HeaderPara">My orders</p>
                <button
                  className="CartItemsContainer"
                  onClick={this.onClickCart}
                  type="button"
                  data-testid="cart"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                    alt="nav cart"
                    className="cart-img"
                  />
                  <div className="ItemLengthContainer">
                    <p className="CartLength">{cartList.length}</p>
                  </div>
                </button>
                <button
                  className="logout-button"
                  type="button"
                  onClick={this.onClickLogout}
                >
                  Logout
                </button>
                <button
                  type="button"
                  className="mobile-btn"
                  onClick={this.onClickLogout}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                    alt="nav logout"
                    className="nav-bar-img"
                  />
                </button>
              </div>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default withRouter(Header)
