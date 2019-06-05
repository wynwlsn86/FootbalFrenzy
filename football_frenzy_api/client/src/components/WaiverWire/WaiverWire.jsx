import React, { Component } from 'react';
import './WaiverWire.css'

class WaiverWire extends Component {
  // display50 = () => {
  //   for(let i = 0; i< 50; i++){
  //     return (
  //     <div id='playerCard'>
  //     <i 
  //       // id={player.id}
  //       id={[this.props.location.state.team.id, this.props.allPlayers[i].id]}
  //       className="pointer plus square icon" 
  //       size='large'
  //       onClick={this.props.updateUserData}></i> 
  //       <div>
  //         <h3>Name: {this.props.allPlayers[i].displayName}</h3>
  //         <h4>Team: {this.props.allPlayers[i].nfl_team}</h4>
  //         <h4>Position: {this.props.allPlayers[i].position}</h4>
  //         <h4>College: {this.props.allPlayers[i].college}</h4>
  //       </div>
        
  //   </div>
  //   )
  //   }
  // }
  render() {
    console.log(this.props.location.state.team.id)
    const players = this.props.allPlayers.slice(0, 49).map(player => {
      console.log(player.id, 'mapped id')
      return (
        <div id='playerCard'>
          <i 
            // id={player.id}
            id={[this.props.location.state.team.id, player.id]}
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
    });
    return (
      <div>
        <input type='text' placeholder='Search for a player...'/>
        
        <div className='flex'>
          {
            players
     
          }
        </div>
      </div>
    );
  }
}

export default WaiverWire;