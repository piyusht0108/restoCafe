import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-family: 'Roboto';
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 130px;
  font-size: 20px;
`

export const HeaderHeading = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  @media (max-width: 575px) {
    font-size: 20px;
  }
`

export const HeaderPara = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  @media (max-width: 575px) {
    font-size: 15px;
  }
`

export const CartItemsContainer = styled.div`
  background-image: url('https://res.cloudinary.com/dj63dzhgu/image/upload/v1734198981/Cart_zafq3c.jpg');
  background-size: cover;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: flex-end;
`

export const ItemLengthContainer = styled.div`
  background-color: Orange;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CartLength = styled.p`
  font-size: 10px;
  font-family: 'Roboto';
  @media (max-width: 575px) {
    font-size: 6px;
  }
`
