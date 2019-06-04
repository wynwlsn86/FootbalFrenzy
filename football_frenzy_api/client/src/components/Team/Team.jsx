import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class Team extends Component {
  
  render() {
    const {team} = this.props.location.state
    console.log(team)

    return (
      <div>
        <Button><Link to='/dashboard'>Dashboard</Link></Button>
        <h1>{team.name}</h1>
        <li>QB: {team.qb}</li>
        <li>RB1: {team.rb1}</li>
        <li>RB2: {team.rb2}</li>
        <li>WR1: {team.wr1}</li>
        <li>WR2: {team.wr2}</li>
        <li>TE: {team.te}</li>
        <li>FLEX: {team.flex}</li>
        <li>DEF: {team.def}</li>
        <li>K: {team.k}</li>
        <li>Bench 1: {team.bn1}</li>
        <li>Bench 2: {team.bn2}</li>
      </div>
    );
  }
}

export default Team;