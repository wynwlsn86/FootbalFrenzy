import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class League extends Component {
  handleClick = (e, team) => {
    this.props.setLeagueId(e)
    this.props.setSelectedTeam(team)
  }
  render() {
    // const {allTeams} = this.props
    // console.log(allTeams, 'allteams')
    return (
      <div>
        <h1>Leagues</h1>
        {
          this.props.leagues.map(team => {
            console.log(team)
            return <Link 
                      to={
                        {
                        pathname: `/teams/${team.id}`,
                        state: {team},
                        }
                      }>
                        <Button 
                        id={team.id}
                        onClick={(team) => this.props.setSelectedTeam(team)}>
                          {team.name}
                          
                        </Button>
                    </Link>
            
          })
        }
        <h1>{this.props.location.state.league.id}</h1>
          
      </div>
    );
  }
}

export default League;