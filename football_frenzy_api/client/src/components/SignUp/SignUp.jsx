import React, { Component } from 'react';
import {createTeam} from '../../services/apiServices'
import {Redirect} from 'react-router-dom'
import './SignUp.css'

class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      name: null,
      leagueid: null,
      isCreated: false
    }
  }

  handleCreateTeam = async (e) => {
    e.preventDefault();
    const params = {
      name: this.state.name,
      league_id: this.state.leagueid,
      //hard coded user time due to tie constraints
      user_id: 1
    }
    console.log(params)
    let newTeam = await createTeam(params)
    console.log(newTeam, 'new team in front end')
    this.props.fetchUserData();
    this.setState({isCreated: true})

  }

  handleFormChange = (e) => {
    const { name, value } = e.target;    
    this.setState({ [name]: value });
  }
  render() {
    if(this.state.isCreated){
      return <Redirect to='/dashboard' />
    }
    else {
      return (
        <div>
          <h1>Create a Team</h1>
          
          <form  onSubmit={this.handleCreateTeam}>
          <div className='signup-input'>
            <input 
              type='text' 
              placeholder='Team Name' 
              name='name'
              onChange={this.handleFormChange}/>
            <input 
              type='text' 
              placeholder='League ID' 
              name='leagueid'
              onChange={this.handleFormChange}/>
            </div>
            <div className='signup-button'>
            <button type='submit'>Create a team</button>
            </div>
          </form>
        </div>
      );
    }

  }
}

export default SignUp;