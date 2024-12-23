import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './components/RestroContext'
import './App.css'

class App extends Component {
  state = {
    activeCategory: '',
    cartList: [],
  }

  removeCartItem = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.filter(eachItem => eachItem.dishId !== id),
    }))
  }

  addCartItem = product => {
    const {cartList} = this.state
    const newCartList = [...cartList]
    const productQuantity = product.quantity
    if (productQuantity >= 1) {
      if (newCartList.length !== 0) {
        const cartIdList = newCartList.map(eachItem => eachItem.dishId)
        if (cartIdList.includes(product.dishId)) {
          const updatedCartList = newCartList.map(eachItem => {
            let updatedItem = {}
            if (eachItem.dishId === product.dishId) {
              updatedItem = {
                ...product,
                quantity: eachItem.quantity + product.quantity,
              }
            } else {
              updatedItem = {...eachItem}
            }
            return updatedItem
          })
          this.setState({cartList: updatedCartList})
        } else {
          this.setState(prevState => ({
            cartList: [...prevState.cartList, product],
          }))
        }
      } else {
        this.setState(prevState => ({
          cartList: [...prevState.cartList, product],
        }))
      }
    }
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachItem => {
        let updatedItem = {}
        if (eachItem.dishId === id) {
          updatedItem = {...eachItem, quantity: eachItem.quantity + 1}
        } else {
          updatedItem = {...eachItem}
        }
        return updatedItem
      }),
    }))
  }

  decrementCartItemQuantity = (id, quantity) => {
    if (quantity === 1) {
      this.removeCartItem(id)
    } else {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachItem => {
          let updatedItem = {}
          if (eachItem.dishId === id) {
            updatedItem = {...eachItem, quantity: eachItem.quantity - 1}
          } else {
            updatedItem = {...eachItem}
          }
          return updatedItem
        }),
      }))
    }
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  render() {
    // prettier-ignore
    const {activeCategory, cartList, apiStatus} =
      this.state
    return (
      <CartContext.Provider
        value={{
          apiStatus,
          activeCategory,
          cartList,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          changeCategory: this.onChangeCategory,
          removeCartItem: this.removeCartItem,
          addCartItem: this.addCartItem,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    )
  }
}

export default App
