import {Component} from 'react'
import RestroContext from '../RestroContext'

import './index.css'

class Category extends Component {
  render() {
    const {categoryList, activeCategory} = this.props
    return (
      <RestroContext.Consumer>
        {value => {
          const {changeCategory} = value
          return (
            <div>
              <div className="category-container">
                {categoryList.map(eachItem => {
                  const onClickItem = () => {
                    changeCategory(eachItem)
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
        }}
      </RestroContext.Consumer>
    )
  }
}

export default Category
