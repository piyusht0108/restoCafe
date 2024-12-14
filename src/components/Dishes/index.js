import {Component} from 'react'
import RestroContext from '../RestroContext'
import DishItems from '../DishItems'
import './index.css'

class Dishes extends Component {
  state = {menuList: []}

  componentDidMount() {
    this.getItems()
  }

  getItems = async () => {
    const apiUrl =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
    const response = await fetch(apiUrl)
    const data = await response.json()
    const tableMenuList = data[0].table_menu_list
    this.setState({menuList: tableMenuList})
  }

  getItemsList = activeCategory => {
    const {menuList} = this.state
    let itemsList = []
    for (let eachItems of menuList) {
      if (eachItems.menu_category === activeCategory) {
        itemsList = eachItems.category_dishes
        break
      }
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
                  <DishItems details={eachItem} key={eachItem.dish_id} />
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
