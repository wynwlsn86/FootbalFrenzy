import React, { Component } from 'react';
import './WaiverWire.css'
import { fetchTeam } from '../../services/apiServices'

class WaiverWire extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
      filter: 'name'
    }
  }
  handleFormChange = (e) => {
    const { name, value } = e.target;    
    this.setState({ [name]: value });
}
  handleFilterSwitch = (e) => {
    this.setState({filter: e.target.id})
  }
  render() {
    
    return (
      <div>
        <div className='waiverwire-input'>
          <select type='option' onChange={this.handleFilterSwitch}>
            <option id='name'>name</option>
            <option id='position'>position</option>
          </select>
        
          <input 
            type='text' 
            placeholder='Search...'
            name='search'
            onChange={this.handleFormChange}
            value={this.props.search}
            id='search'
            key='search'
            />
          </div>
        <div className='waiverwire-flex'>
          {
                  this.state.filter === 'name' ?  this.props.allPlayers.filter(player => {
                    console.log(player.team_id, player.displayName)
                    return player.displayName.toLowerCase().includes(this.state.search.toLowerCase());
                  }).map((player, id) => 
                  <div id='playerCard'>
                  <i 
                    id={player.id}
                    className="pointer plus square icon" 
                    size='large'
                    onClick={this.props.handleUpdate}
                    // onClick={this.props.updateUserData}
                  >
                  </i> 
                  <div className="waiverwire-team-status"> 
                    <h4>Current Team: 
                      {
                        Number.isInteger(player.team_id) ? <h3>
                        {/* {
                          this.props.teams.find(team => team.id == player.team_id).name
                        } */}Taken
                        </h3> : <h3>Available</h3>
                      }
                    </h4>
                    </div>
                    <div className="waiverwire-stats-container">
                      <h3>Name: {player.displayName}</h3>
                      <h4>Team: {player.nfl_team}</h4>
                      <h4>Position: {player.position}</h4>
                      <h4>College: {player.college}</h4>
                    </div>
                </div>
                ).slice(0, 25) : this.props.allPlayers.filter(player => {
                  return player.position.toLowerCase().includes(this.state.search.toLowerCase());
                }).map((player, id) => 
                <div id='playerCard'>
                <i 
                  id={player.id}
                  className="pointer plus square icon" 
                  size='large'
                  onClick={this.props.handleUpdate}
                  // onClick={this.props.updateUserData}
                >
                </i>
                <div className="waiverwire-team-status"> 
                  <h4>Current Team: 
                    {
                      player.team_id ? <h3>{
                        this.props.teams.find(team => team.id == player.team_id).name
                      }</h3> : <h3>Available</h3>
                    }
                  </h4>
                  </div>
                  <div className="waiverwire-stats-container">
                    <h3>Name: {player.displayName}</h3>
                    <h4>Team: {player.nfl_team}</h4>
                    <h4>Position: {player.position}</h4>
                    <h4>College: {player.college}</h4>
                  </div>
              </div>
            ).slice(0, 25) 
                
          }
        </div>
      </div>
    );
  }
}

export default WaiverWire;

