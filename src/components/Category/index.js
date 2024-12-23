import {Component} from 'react'

import './index.css'

class Category extends Component {
  render() {
    // prettier-ignore
    const {onChangeCategory, restaurantDetails, activeCategory} =
            this.props
    const tableMenuList = restaurantDetails.table_menu_list
    const categoryList = tableMenuList.map(eachItem => eachItem.menu_category)
    return (
      <div>
        <div className="category-container">
          {categoryList.map(eachItem => {
            const onClickItem = () => {
              onChangeCategory(eachItem)
            }
            const buttonClassName =
              eachItem === activeCategory
                ? 'active-category-button'
                : 'category-button'
            return (
              <li className="category-item" key={eachItem}>
                <button
                  className={buttonClassName}
                  onClick={onClickItem}
                  type="button"
                >
                  {eachItem}
                </button>
              </li>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Category
