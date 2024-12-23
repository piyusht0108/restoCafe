import {Component} from 'react'

import DishItems from '../DishItems'

class Dishes extends Component {
  getItemsList = (activeCategory, restaurantDetails) => {
    const tableMenuList = restaurantDetails.table_menu_list

    const itemsList = []

    const filteredList = tableMenuList.filter(
      eachItem => eachItem.menu_category === activeCategory,
    )
    if (filteredList.length > 0) {
      const dishes = filteredList[0].category_dishes
      const filteredDishes = dishes.map(eachItem => ({
        addOnCat: eachItem.addonCat,
        dishAvailability: eachItem.dish_Availability,
        dishType: eachItem.dish_Type,
        dishCalories: eachItem.dish_calories,
        dishCurrency: eachItem.dish_currency,
        dishDescription: eachItem.dish_description,
        dishId: eachItem.dish_id,
        dishImage: eachItem.dish_image,
        dishName: eachItem.dish_name,
        dishPrice: eachItem.dish_price,
        quantity: 0,
      }))
      return filteredDishes
    }

    return itemsList
  }

  render() {
    const {activeCategory, restaurantDetails} = this.props
    const itemList = this.getItemsList(activeCategory, restaurantDetails)
    return (
      <div>
        <ul className="dish-list">
          {itemList.map(eachItem => (
            <DishItems details={eachItem} key={eachItem.dishId} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Dishes
