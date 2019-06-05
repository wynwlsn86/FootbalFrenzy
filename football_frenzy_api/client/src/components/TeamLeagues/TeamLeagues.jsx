import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class TeamLeagues extends Component {
  render() {
    return (
      <div>
        ALL Teams
        {
        this.props.userTeams.map(team => {
          console.log('map',team)
            return <Link 
                  to={
                    {
                      pathname: `/teams/${team.id}`,
                      state: {team},
                    }
                  }>
                  <Button 
                  onClick={() => this.props.setSelectedTeam(team)}>{team.name}
                  </Button>
                </Link>
            
          })
        }
      </div>
    );
  }
}

export default TeamLeagues;