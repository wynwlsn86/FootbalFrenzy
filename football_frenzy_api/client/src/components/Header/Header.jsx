import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div>
           <Button size='large' inverted color='green'><Link to='/'>Home</Link></Button>
          <Link to='/login'><Button size='massive'>Login</Button></Link>
          <Button size='large'><Link to='/signup'>signup</Link></Button>
          <Button><Link to='/dashboard'>Dashboard</Link></Button>
              
 
        
        
        
      </div>
    );
  }
}

export default Header;