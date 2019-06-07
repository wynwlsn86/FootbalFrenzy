import React, { Component } from 'react';
import './Dashboard.css'
import landingImage from '../../assets/landingImage.jpeg'
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {fetchAllTeams} from '../../services/apiServices'


class Dashboard extends Component {
  componentDidMount(props) {
    this.props.fetchUserData()
    console.log('dashboard fetch')
  }
  //needs team id

  render() {
    const {leagues} = this.props
    const {allTeams} = this.props
    return (
      <div>
        <div className="dashboard-container">
        {/* <img src={landingImage} alt='' /> */}
        {
          leagues.map(league => {
            return <Link 
                  to={
                    {
                      pathname: `teamleagues/${league.id}`,
                      state: {league},
                    }
                  }>
                  <Button>{league.name}</Button>
                </Link>
          })
        }
      </div>
      </div>
    );
  }
}

export default Dashboard;