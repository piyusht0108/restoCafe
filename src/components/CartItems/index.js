import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../RestroContext'

import './index.css'

const CartItems = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      // prettier-ignore
      const {dishId, dishName, quantity, dishPrice, dishImage, dishCurrency} =
        cartItemDetails
      const onRemoveCartItem = () => {
        removeCartItem(dishId)
      }

      const onIncreaseCartItem = () => {
        incrementCartItemQuantity(dishId)
      }

      const onDecreaseCartItem = () => {
        decrementCartItemQuantity(dishId, quantity)
      }

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={dishImage} alt={dishName} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{dishName}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onDecreaseCartItem}
                data-testid="minus"
              >
                -
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onIncreaseCartItem}
                data-testid="plus"
              >
                +
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">
                {dishCurrency} {dishPrice * quantity}/-
              </p>
              <button
                className="remove-button"
                type="button"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
            data-testid="remove"
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItems
