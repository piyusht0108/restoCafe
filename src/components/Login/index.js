import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {inputUsername: '', inputPassword: '', errorMsg: ''}

  onChangeUsername = event => {
    this.setState({inputUsername: event.target.value})
  }

  onChangePassword = event => {
    this.setState({inputPassword: event.target.value})
  }

  onLoginSuccess = data => {
    const jwtToken = data.jwt_token
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.push('/')
  }

  onLoginFailure = data => {
    const errorMsg = data.error_msg
    this.setState({errorMsg})
  }

  onClickSubmit = async event => {
    event.preventDefault()
    const {inputPassword, inputUsername} = this.state
    const userDetails = {
      username: inputUsername,
      password: inputPassword,
    }
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data)
    } else {
      this.onLoginFailure(data)
    }
  }

  render() {
    const {inputPassword, inputUsername, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-page">
        <div className="login-card">
          <h1 className="text-info">Login</h1>
          <form className="login-form">
            <div className="label-input-container">
              <label className="input-label" htmlFor="username">
                USERNAME
              </label>
              <input
                className="input"
                type="text"
                id="username"
                placeholder="Username"
                value={inputUsername}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="label-input-container">
              <label className="input-label" htmlFor="password">
                PASSWORD
              </label>
              <input
                className="input"
                type="password"
                id="password"
                placeholder="Password"
                value={inputPassword}
                onChange={this.onChangePassword}
              />
            </div>
            <button
              className="login-button"
              type="submit"
              onClick={this.onClickSubmit}
            >
              Login
            </button>
            <p className="error-msg">{errorMsg}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
