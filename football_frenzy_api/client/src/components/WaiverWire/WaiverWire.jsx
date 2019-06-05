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

// playerFilter = () => {
//   if(!this.state.search){
//     console.log('only 50')
//     console.log(this.props.allPlayers.slice(0, 49))
//     this.props.allPlayers.slice(0, 49).map(player => {
//       console.log(1)
//       return <div id='playerCard'>
          
//           <i 
//             // id={player.id}
//             id={[this.props.location.state.team.id, player.id]}
//             className="pointer plus square icon" 
//             size='large'
//             onClick={this.props.updateUserData}></i> 
//             <div>
//               <h3>Name: {player.displayName}</h3>
//               <h4>Team: {player.nfl_team}</h4>
//               <h4>Position: {player.position}</h4>
//               <h4>College: {player.college}</h4>
//             </div>
            
//         </div>

      
//     })
//   }
//   else{
//     console.log('filter all')
//     this.props.allPlayers.filter(player => {
//       return player.displayName.toLowerCase().includes(this.state.search.toLowerCase());
//     }).map((player, id) => 
//     <div id='playerCard'>
//     <i 
//       id={[this.props.location.state.team.id, player.id]}
//       className="pointer plus square icon" 
//       size='large'
//       onClick={this.props.updateUserData}></i> 
//       <div>
//         <h3>Name: {player.displayName}</h3>
//         <h4>Team: {player.nfl_team}</h4>
//         <h4>Position: {player.position}</h4>
//         <h4>College: {player.college}</h4>
//       </div>
      
//   </div>
//     )
//   }
// }
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
     
          }
        </div>
      </div>
    );
  }
}

export default WaiverWire;

