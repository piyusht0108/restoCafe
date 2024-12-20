import {Component} from 'react'
import RestroContext from '../RestroContext'
import './index.css'

class Header extends Component {
  render() {
    return (
      <RestroContext.Consumer>
        {value => {
          const {restaurantDetails, cartItems} = value
          return (
            <div className="HeaderContainer">
              <h1 className="HeaderHeading">
                {restaurantDetails.restaurant_name}
              </h1>
              <div className="CartContainer">
                <p className="HeaderPara">My orders</p>
                <div className="CartItemsContainer">
                  <div className="ItemLengthContainer">
                    <p className="CartLength">{cartItems.length}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </RestroContext.Consumer>
    )
  }
}

export default Header
