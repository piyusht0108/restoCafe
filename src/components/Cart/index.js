import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'

import CartContext from '../RestroContext'
import CartItems from '../CartItems'
import './index.css'

class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList, removeAllCartItems} = value
          const showEmptyView = cartList.length === 0
          const onClickRemoveAll = () => {
            removeAllCartItems()
          }
          return (
            <>
              <Header />
              <div>
                {showEmptyView ? (
                  <div className="cart-empty-view-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                      className="cart-empty-img"
                      alt="cart empty"
                    />
                    <h1 className="cart-empty-heading">Your Cart Is Empty</h1>

                    <Link to="/">
                      <button type="button" className="shop-now-btn">
                        Order Now
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <div className="heading-container">
                      <h1>My Cart</h1>
                      <button
                        type="button"
                        className="remove-all-button"
                        onClick={onClickRemoveAll}
                      >
                        Remove All
                      </button>
                    </div>
                    <ul className="cart-list">
                      {cartList.map(eachCartItem => (
                        <CartItems
                          key={eachCartItem.dishId}
                          cartItemDetails={eachCartItem}
                        />
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Cart
