import styled from 'styled-components'

export const DishListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px;
  border: 1px solid Grey;
  border-radius: 10px;
  padding: 15px;
`
export const DishImage = styled.img`
  @media (min-width: 576px) {
    height: 200px;
    width: 200px;
  }
  @media (max-width: 575px) {
    height: 80px;
    width: 80px;
  }
`
export const DishName = styled.p`
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 0;
  @media (max-width: 575px) {
    font-size: 16px;
    font-family: 'Roboto';
    font-weight: 600;
    margin-bottom: 0;
  }
`

export const DishPrice = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  margin-top: 10px;
  @media (max-width: 575px) {
    font-size: 10px;
    font-family: 'Roboto';
    margin-top: 8px;
  }
`

export const DishDescription = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: Grey;
  margin-top: 10px;
  @media (max-width: 575px) {
    font-size: 10px;
    font-family: 'Roboto';
    color: Grey;
    margin-top: 8px;
  }
`

export const DishAvailability = styled.p`
  color: Red;
  font-size: 15px;
  font-family: 'Roboto';
  @media (max-width: 575px) {
    color: Red;
    font-size: 10px;
    font-family: 'Roboto';
  }
`

export const DishQuantityContainer = styled.div`
  @media (min-width: 576px) {
    background-color: Green;
    border-radius: 15px;
    width: 150px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media (max-width: 575px) {
    background-color: Green;
    border-radius: 10px;
    width: 100px;
    height: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

export const DishQuantityButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0;
  outline: none;
  font-size: 18px;
  color: #ffffff;
`
export const DishQuantity = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
`

export const DishDetailsContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  @media (max-width: 575px) {
    width: 100%
    display: flex;
    flex-direction: column;
    width: 150px;
  }
`

export const DishCalories = styled.p`
  color: Orange;
  font-size: 15px;
  font-family: 'Roboto';
  @media (max-width: 575px) {
    font-size: 12px;
    color: Orange;
  }
`
export const DishCustomizationText = styled.a`
  color: Blue;
  margin-top: 10px;
  font-size: 16px;
  font-family: 'Roboto';
  text-decoration: none;
  @media (max-width: 575px) {
    font-size: 12px;
  }
`

export const DishTypeImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  @media (max-width: 575px) {
    height: 20px;
    width: 20px;
  }
`

export const DishTypeDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
