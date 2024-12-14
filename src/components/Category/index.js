import {Component} from 'react'
import RestroContext from '../RestroContext'
import {
  CategoryContainer,
  CategoryItem,
  CategoryButton,
} from './styledComponents'

class Category extends Component {
  render() {
    const {categoryList, activeCategory} = this.props
    return (
      <RestroContext.Consumer>
        {value => {
          const {changeCategory} = value
          return (
            <div>
              <CategoryContainer>
                {categoryList.map(eachItem => {
                  const onClickItem = () => {
                    changeCategory(eachItem)
                  }
                  return (
                    <CategoryItem key={eachItem}>
                      <CategoryButton
                        isactive={
                          activeCategory === eachItem ? 'true' : 'false'
                        }
                        onClick={onClickItem}
                        type="button"
                      >
                        {eachItem}
                      </CategoryButton>
                    </CategoryItem>
                  )
                })}
              </CategoryContainer>
            </div>
          )
        }}
      </RestroContext.Consumer>
    )
  }
}

export default Category
