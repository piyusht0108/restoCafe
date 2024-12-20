import {Component} from 'react'
import RestroContext from '../RestroContext'
import DishItems from '../DishItems'

class Dishes extends Component {
  state = {menuList: []}

  componentDidMount() {
    this.getItems()
  }

  getItems = async () => {
    const {restaurantDetails} = this.props
    const tableMenuList = restaurantDetails.table_menu_list
    this.setState({menuList: tableMenuList})
  }

  getItemsList = activeCategory => {
    const {menuList} = this.state
    const itemsList = []

    const filteredList = menuList.filter(
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
      }))
      return filteredDishes
    }

    return itemsList
  }

  render() {
    return (
      <RestroContext.Consumer>
        {value => {
          const {activeCategory} = value
          const itemList = this.getItemsList(activeCategory)
          return (
            <div>
              <ul className="dish-list">
                {itemList.map(eachItem => (
                  <DishItems details={eachItem} key={eachItem.dishId} />
                ))}
              </ul>
            </div>
          )
        }}
      </RestroContext.Consumer>
    )
  }
}

export default Dishes
