import {Component} from 'react'
import RestroContext from '../RestroContext'
import {
  DishListItem,
  DishImage,
  DishName,
  DishPrice,
  DishDescription,
  DishAvailability,
  DishQuantityContainer,
  DishQuantityButton,
  DishQuantity,
  DishDetailsContainer,
  DishCalories,
  DishCustomizationText,
  DishTypeImage,
  DishTypeDetailsContainer,
} from './styledComponents'

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
    const isCustomizationAvailable = details.addonCat.length >= 1
    const {quantity} = this.state
    const dishTypeImgUrl =
      details.dish_Type === 2
        ? 'https://res.cloudinary.com/dj63dzhgu/image/upload/v1734202984/Veg_symbol.svg_sxkqef.png'
        : 'https://res.cloudinary.com/dj63dzhgu/image/upload/v1734203482/non_veg_symbol_nm2ule.png'
    return (
      <RestroContext.Consumer>
        {value => {
          const {addToCartItem, removeFromCartItem} = value
          const onClickIncrement = () => {
            addToCartItem(details.dish_id, details, quantity)
            this.increaseQuantity()
          }
          const onClickDecrement = () => {
            removeFromCartItem(details.dish_id, details, quantity)
            this.decreaseQuantity()
          }
          return (
            <DishListItem>
              <DishTypeDetailsContainer>
                <DishTypeImage src={dishTypeImgUrl} />
                <DishDetailsContainer>
                  <DishName>{details.dish_name}</DishName>
                  <DishPrice>
                    {details.dish_currency} {details.dish_price}
                  </DishPrice>
                  <DishDescription>{details.dish_description}</DishDescription>
                  {details.dish_Availability ? (
                    <DishQuantityContainer>
                      <DishQuantityButton
                        type="button"
                        onClick={onClickDecrement}
                      >
                        -
                      </DishQuantityButton>
                      <DishQuantity>{quantity}</DishQuantity>
                      <DishQuantityButton
                        type="button"
                        onClick={onClickIncrement}
                      >
                        +
                      </DishQuantityButton>
                    </DishQuantityContainer>
                  ) : (
                    <DishAvailability>Not Available</DishAvailability>
                  )}
                  {isCustomizationAvailable ? (
                    <DishCustomizationText href={details.nexturl}>
                      Customizations available
                    </DishCustomizationText>
                  ) : null}
                </DishDetailsContainer>
              </DishTypeDetailsContainer>
              <div>
                <DishCalories>{details.dish_calories} calories</DishCalories>
              </div>
              <div>
                <DishImage src={details.dish_image} alt={details.dish_name} />
              </div>
            </DishListItem>
          )
        }}
      </RestroContext.Consumer>
    )
  }
}

export default DishItems
