import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class League extends Component {
  render() {
    const {allTeams} = this.props
    console.log(allTeams, 'allteams')
    return (
      <div>
        League
        {
          allTeams.map(team => {
            console.log(team)
            return <Link 
                  to={
                    {
                      pathname: `/teams/${team.id}`,
                      state: {team},
                    }
                  }>
                  <Button>{team.name}</Button>
                </Link>
            
          })
        }
        <h1>{this.props.location.state.league.id}</h1>
      </div>
    );
  }
}

export default League;