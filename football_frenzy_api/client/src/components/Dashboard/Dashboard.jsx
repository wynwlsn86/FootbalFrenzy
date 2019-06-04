import React, { Component } from 'react';
import './Dashboard.css'
import landingImage from '../../assets/landingImage.jpeg'
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {fetchAllTeams} from '../../services/apiServices'


class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchTeamData();
  }
  

  render() {
    const {leagues} = this.props
    const {allTeams} = this.props
    console.log(allTeams)
    return (
      <div>
        {/* <img src={landingImage} alt='' /> */}
        {
          leagues.map(league => {
            console.log(league)
            return <Link 
                  to={
                    {
                      pathname: `leagues/${league.id}`,
                      state: {league},
                    }
                  }>
                  <Button>{league.name}</Button>
                </Link>
            
          })
        }
      </div>
    );
  }
}

export default Dashboard;