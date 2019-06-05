import React, { Component } from 'react';
import './WaiverWire.css'

class WaiverWire extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
  }
  handleFormChange = (e) => {
    const { name, value } = e.target;    
    this.setState({ [name]: value });
}

handleUpdate= (e) => {
  this.props.fetchUserData();
  this.props.updateUserData(e)
}
  render() {
    return (
      <div>
        <input 
          type='text' 
          placeholder='Search for a player...'
          name='search'
          onChange={this.handleFormChange}
          value={this.props.search}
          id='search'
          key='search'
          />
        <div className='flex'>
          {
            
                this.props.allPlayers.filter(player => {
                return player.displayName.toLowerCase().includes(this.state.search.toLowerCase());
              }).map((player, id) => 
              <div id='playerCard'>
              <i 
                id={[this.props.location.state.selectedTeam.id, player.id]}
                className="pointer plus square icon" 
                size='large'
                onClick={this.handleUpdate}
                // onClick={this.props.updateUserData}
              >
              </i> 
                <div>
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

