import React, { Component } from 'react';
import './WaiverWire.css'

class WaiverWire extends Component {
  render() {
    return (
      <div className='flex'>
        {
          this.props.allPlayers.map(player => {
            return (
              <div id='playerCard'>
                <i 
                  id={player.id}
                  className="pointer plus square icon" 
                  size='large'
                  onClick={this.props.updateUserData}></i> 
                  <div>
                    <h3>Name: {player.displayName}</h3>
                    <h4>Team: {player.nfl_team}</h4>
                    <h4>Position: {player.position}</h4>
                    <h4>College: {player.college}</h4>
                  </div>
                  
              </div>

            )
          })
        }
      </div>
    );
  }
}

export default WaiverWire;