import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import {
  updateTeam,
  updatePlayersTeam
} from '../../services/apiServices'

class Team extends Component {
  renderDeleteButton = (name, pos) => {
    if(name){
      return <button 
        id={pos}
        name={name}
        onClick={this.deletePlayer}>Delete</button>
    }
  }
  deletePlayer = async (e) => {
    e.preventDefault();
    const pos = e.target.id;
    console.log(pos, 'pos')
    const deleteP = {
      [pos]: null
    }
    let update = await updateTeam(this.props.selectedTeam.id, deleteP)
    console.log(update)
    let drop = {
      team_id: null
    }
    // const name = e.target.name
    // const resetPlayer = this.props.allPlayers.find((player) => {
    //   console.log(player)
    //   return player.displayName == name
    //     }
    //   )
    //   console.log(resetPlayer)
    // let updatePlayer = updatePlayersTeam( ,drop)
  }
  
  render() {
    const {selectedTeam} = this.props

    return (
      <div>
        <Button>

        <Link 
                  to={
                    {
                      pathname: `/waiverwire`,
                      state: {selectedTeam},
                    }
                  }>
                    Waiver Wire
        </Link>
        </Button>
        <h1>{selectedTeam.name}</h1>
        <li>QB: {selectedTeam.qb}</li>
        {this.renderDeleteButton(selectedTeam.qb, 'qb')}
        <li>RB1: {selectedTeam.rb1}</li>
        {this.renderDeleteButton(selectedTeam.rb1, 'rb1')}
        <li>RB2: {selectedTeam.rb2}</li>
        {this.renderDeleteButton(selectedTeam.rb2, 'rb2')}
        <li>WR1: {selectedTeam.wr1}</li>
        {this.renderDeleteButton(selectedTeam.wr1, 'wr1')}
        <li>WR2: {selectedTeam.wr2}</li>
        {this.renderDeleteButton(selectedTeam.wr2, 'wr2')}
        <li>TE: {selectedTeam.te}</li>
        {this.renderDeleteButton(selectedTeam.te, 'te')}
        <li>FLEX: {selectedTeam.flex}</li>
        {this.renderDeleteButton(selectedTeam.flex, 'flex')}
        <li>DEF: {selectedTeam.def}</li>
        {this.renderDeleteButton(selectedTeam.def, 'def')}
        <li>K: {selectedTeam.k}</li>
        {this.renderDeleteButton(selectedTeam.k, 'k')}
        <li>Bench 1: {selectedTeam.bn1}</li>
        {this.renderDeleteButton(selectedTeam.bn1, 'bn1')}
        <li>Bench 2: {selectedTeam.bn2}</li>
        {this.renderDeleteButton(selectedTeam.bn2, 'bn2')}
      </div>
    );
  }
}

export default Team;