import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class Team extends Component {
  
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
        <li>RB1: {selectedTeam.rb1}</li>
        <li>RB2: {selectedTeam.rb2}</li>
        <li>WR1: {selectedTeam.wr1}</li>
        <li>WR2: {selectedTeam.wr2}</li>
        <li>TE: {selectedTeam.te}</li>
        <li>FLEX: {selectedTeam.flex}</li>
        <li>DEF: {selectedTeam.def}</li>
        <li>K: {selectedTeam.k}</li>
        <li>Bench 1: {selectedTeam.bn1}</li>
        <li>Bench 2: {selectedTeam.bn2}</li>
      </div>
    );
  }
}

export default Team;