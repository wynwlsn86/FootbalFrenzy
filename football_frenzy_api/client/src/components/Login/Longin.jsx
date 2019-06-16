import React, { Component } from 'react';
import {login} from '../../services/apiServices'
import "./Login.css";

class Longin extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      user: {}
    }
  }
  handleFormChange = (e) => {
    const { name, value } = e.target;    
    this.setState({ [name]: value });
  }

  userLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    const user = await login(userData)
    this.setState({user})
    this.props.setUser(user)

  }
  render() {
    return (
      <div>
        <h1 className="login-title">Login</h1>
        <br/>
        <br/>
        <h3>  Dev Login: </h3>
          <h4>Email: test@test.com</h4>
          <h4>Password: test</h4>
        <form onSubmit={this.userLogin}>
          <div className="login-input">
          <input 
            type='text' 
            placeholder='email'
            name='email'
            onChange={this.handleFormChange}
            value={this.props.search}
            id='name'
            key='name'
            />
            </div>
            <div className="login-input">
          <input 
            type='password' 
            placeholder='password'
            name='password'
            onChange={this.handleFormChange}
            value={this.props.search}
            id='password'
            key='password'
            />
            </div>
            <div className="login-button">
            <button type='submit' className="login-submit">Submit</button>
            </div>
          </form>
      </div>
    );
  }
}

export default Longin;