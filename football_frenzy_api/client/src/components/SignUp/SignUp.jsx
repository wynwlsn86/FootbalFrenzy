import React, { Component } from 'react';
import {createTeam} from '../../services/apiServices'

class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      name: null,
      leagueid: null
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

  }

  handleFormChange = (e) => {
    const { name, value } = e.target;    
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div>
        <h1>Create a Team</h1>
        <form onSubmit={this.handleCreateTeam}>
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
          <button type='submit'>Create a team</button>
        </form>
      </div>
    );
  }
}

export default SignUp;