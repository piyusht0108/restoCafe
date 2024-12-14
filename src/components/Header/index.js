import {Component} from 'react'
import RestroContext from '../RestroContext'
import {
  HeaderContainer,
  CartContainer,
  HeaderHeading,
  HeaderPara,
  CartItemsContainer,
  ItemLengthContainer,
  CartLength,
} from './styledComponents'

class Header extends Component {
  render() {
    return (
      <RestroContext.Consumer>
        {value => {
          const {restaurantDetails, cartItems} = value
          return (
            <HeaderContainer>
              <HeaderHeading>{restaurantDetails.restaurant_name}</HeaderHeading>
              <CartContainer>
                <HeaderPara>My orders</HeaderPara>
                <CartItemsContainer>
                  <ItemLengthContainer>
                    <CartLength>{cartItems.length}</CartLength>
                  </ItemLengthContainer>
                </CartItemsContainer>
              </CartContainer>
            </HeaderContainer>
          )
        }}
      </RestroContext.Consumer>
    )
  }
}

export default Header
