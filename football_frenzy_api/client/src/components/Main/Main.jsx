import React, { Component } from 'react';
import LandingPage from '../LandingPage.jsx/LandingPage'
import Dashboard from '../Dashboard/Dashboard'
import {Route, Switch} from 'react-router-dom'
import League from '../League/League'
import {
  fetchAllUsers,
  fetchAllPlayers,
  updateUser,
  fetchAllTeams
} from '../../services/apiServices'
import Team from '../Team/Team'
import WaiverWire from '../WaiverWire/WaiverWire';

class Main extends Component {
  constructor(){
    super()
    this.state = {
      leagues: [],
      teams: [],
      email: [],
      allTeams: [],
      allPlayers: []
    }
  }
  componentDidMount = () => {
      this.fetchUserData();
      this.fetchPlayerData();
  }

  fetchUserData = async () => {
    const userData = await fetchAllUsers();
    console.log('userdata', userData)
    this.setState({
      leagues: userData.leagues,
      teams: userData.teams,
      email: userData.email
      })
  }
  fetchPlayerData = async() => {
    const playerData = await fetchAllPlayers();
    await console.log(playerData)
    this.setState({allPlayers: playerData})
  }
  fetchTeamData = async () => {
    const teamsData = await fetchAllTeams();
    console.log('team', teamsData)
    this.setState({
      allTeams: teamsData
      })

  }

  updateUserData = async(e) => {
    e.preventDefault();
    console.log(e.target.id);
    this.fetchTeamData();
    // const data =  null;
    // const userUpdate = await updateUser();
    // await console.log(userUpdate)
    // fetchAllUsers();
  }

  


  render() {
    return (
      <div>
        test
        <Switch>
          <Route 
            exact path='/'
            render={(props) => <LandingPage />} />
          <Route 
            exact path={`/leagues/:id`}
            component={(props)=>
              <League 
                {...props}
                allTeams={this.state.allTeams}/>}
              />
          <Route 
            exact path={`/teams/:id`}
            component={(props)=>
              <Team 
                {...props}
                allTeams={this.state.AllTeams}/>}
              />
          <Route 
            exact path={`/waiverwire`}
            component={(props)=>
              <WaiverWire 
                {...props}
                allPlayers={this.state.allPlayers}
                updateUserData={this.updateUserData}/>}
              />
          <Route 
            exact path='/dashboard'
            render={(props) => 
              <Dashboard 
                leagues={this.state.leagues}
                fetchTeamData={this.fetchTeamData}
                allTeams={this.state.allTeams}
              />} 
          />
        </Switch>
      </div>
    );
  }
}

export default Main;