import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header-title"><i>FOOTBALL FRENZY</i></h1>
        <div className="header-nav">
           <Link to='/'><button className="header-button">Home</button></Link>
          <Link to='/login'><button className="header-button">Login</button></Link>
          <Link to='/signup'><button className="header-button">Signup</button></Link>
          <Link to='/dashboard'><button className="header-button">Dashboard</button></Link>
      </div>
      </div>
    );
  }
}

export default Header;