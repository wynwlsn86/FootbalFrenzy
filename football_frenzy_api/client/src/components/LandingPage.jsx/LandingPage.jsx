import React, { Component } from 'react'
import Login from '../Login/Longin'
import SignUp from '../SignUp/SignUp'
import {Redirect} from 'react-router-dom'


class LandingPage extends Component {
  render() {
    if(this.props.user){
      return <Redirect to='/dashboard' />
    }
    else{
      return (
        <div>
          <Login 
            setUser={this.props.setUser}/>
          <SignUp />
          <li>Landing Page</li>
        </div>
      );
    }
  }
}

export default LandingPage;