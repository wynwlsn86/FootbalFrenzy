import React, { Component } from 'react';
import {login} from '../../services/apiServices'

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
        Login
        <form onSubmit={this.userLogin}>
          <input 
            type='text' 
            placeholder='email'
            name='email'
            onChange={this.handleFormChange}
            value={this.props.search}
            id='name'
            key='name'
            />
          <input 
            type='password' 
            placeholder='password'
            name='password'
            onChange={this.handleFormChange}
            value={this.props.search}
            id='password'
            key='password'
            />
            <button type='submit'>Submit</button>
          </form>
      </div>
    );
  }
}

export default Longin;