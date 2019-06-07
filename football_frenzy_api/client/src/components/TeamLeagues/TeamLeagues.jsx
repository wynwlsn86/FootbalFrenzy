import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import "./TeamLeagues.css";

class TeamLeagues extends Component {
  render() {
    return (
      <div>
        <h1 className="team-leagues-title">All Teams</h1>
        <div className="team-leagues-container">
        {
        this.props.userTeams.map(team => {
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
        <div className="team-leagues-addteam">
        <Link to='/signup'><button>Add A Team</button></Link>
      </div>
      </div>
    );
  }
}

export default TeamLeagues;