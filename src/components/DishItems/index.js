import {Component} from 'react'
import CartContext from '../RestroContext'

import './index.css'

class DishItems extends Component {
  state = {quantity: 0}

  increaseQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  decreaseQuantity = () => {
    const {quantity} = this.state
    if (quantity > 0) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  render() {
    const {details} = this.props
    const {
      addOnCat,
      dishAvailability,
      dishType,
      dishCalories,
      dishCurrency,
      dishDescription,
      dishId,
      dishImage,
      dishName,
      dishPrice,
    } = details
    const isCustomizationAvailable = addOnCat.length >= 1
    const {quantity} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          // prettier-ignore
          const {incrementCartItemQuantity, decrementCartItemQuantity, addCartItem} =
            value
          const onClickIncrement = () => {
            incrementCartItemQuantity(dishId, details, quantity)
            this.increaseQuantity()
          }
          const onClickDecrement = () => {
            decrementCartItemQuantity(dishId, details, quantity)
            this.decreaseQuantity()
          }
          const dishsymbolClassName =
            dishType === 2 ? 'veg-dish-symbol' : 'non-veg-dish-symbol'
          const dishDotClassName = dishType === 2 ? 'veg-dot' : 'non-veg-dot'
          const onClickAddToCart = () => {
            addCartItem({...details, quantity})
          }
          return (
            <li className="dish-list-item">
              <div className="dish-type-details-container">
                <div className={dishsymbolClassName}>
                  <div className={dishDotClassName}>
                    <span>.</span>
                  </div>
                </div>
                <div className="dish-details-container">
                  <h1 className="dish-name">{dishName}</h1>
                  <div className="price-container">
                    <p className="dish-price">
                      {dishCurrency} {dishPrice}
                    </p>
                  </div>
                  <p className="dish-description">{dishDescription}</p>
                  {dishAvailability ? (
                    <div className="quantity-addCart-container">
                      <div className="dish-quantity-container">
                        <button
                          className="dish-quantity-button"
                          type="button"
                          onClick={onClickDecrement}
                        >
                          -
                        </button>
                        <p className="dish-quantity">{quantity}</p>
                        <button
                          className="dish-quantity-button"
                          type="button"
                          onClick={onClickIncrement}
                        >
                          +
                        </button>
                      </div>
                      {quantity > 0 ? (
                        <button
                          type="button"
                          className="add-to-cart-btn"
                          onClick={onClickAddToCart}
                        >
                          ADD TO CART
                        </button>
                      ) : null}
                    </div>
                  ) : (
                    <p className="dish-availability">Not Available</p>
                  )}
                  {isCustomizationAvailable ? (
                    <a
                      className="dish-customization-text"
                      href={details.nexturl}
                    >
                      Customizations available
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="calories-container">
                <p className="dish-calories">{dishCalories} calories</p>
              </div>
              <div>
                <img
                  className="dish-image"
                  src={dishImage}
                  alt={details.dish_name}
                />
              </div>
            </li>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default DishItems
