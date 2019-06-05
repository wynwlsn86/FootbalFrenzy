import React, { Component } from 'react';
import LandingPage from '../LandingPage.jsx/LandingPage'
import Dashboard from '../Dashboard/Dashboard'
import {Route, Switch} from 'react-router-dom'
import League from '../League/League'
import {
  fetchAllUsers,
  fetchAllPlayers,
  updatePlayersTeam,
  fetchAllTeams,
  fetchPlayer,
  updateTeam
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
      allPlayers: [],
      updatedPlayer: {},
      team_id: null
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
    this.setState({allPlayers: playerData})
  }
  fetchTeamData = async () => {
    const teamsData = await fetchAllTeams();
    this.setState({
      allTeams: teamsData
      })

  }

  updateUserData = async(e) => {
    // const {data} = e.target;
    e.preventDefault();
    const teamid = e.target.id[0]
    const playerid = e.target.id.split(',')[1]
    const params = {team_id: teamid}
    const player = await updatePlayersTeam(playerid, params)
    await this.setState({updatedPlayer: player, team_id: teamid})
    await this.updatePosition(e)
    this.fetchTeamData();
  }

  setSelectedTeam = (e) => {
    console.log(this.state.allTeams)
    console.log(e.target.id)
    let team = this.state.allTeams.filter(team => {
      console.log('filter')
      return team.id == e.target.id
    })
    console.log(team)
    this.setState({selectedTeam: team[0]})
  }

  updatePosition = async(e) => {
    switch(this.state.updatedPlayer.position){
      case "QB" : 
          // if(this.state.updatedPlayer)
          return (updateTeam(this.state.team_id, {qb: this.state.updatedPlayer.displayName}))
      case "RB" :
          return (updateTeam(this.state.team_id, {rb1: this.state.updatedPlayer.displayName}))
      case "WR" :
          return (updateTeam(this.state.team_id, {wr1: this.state.updatedPlayer.displayName}))
      case "TE": 
          return (updateTeam(this.state.team_id, {te: this.state.updatedPlayer.displayName}))
      case "DEF":
          return (updateTeam(this.state.team_id, {def: this.state.updatedPlayer.displayName}))
      case "K" :
          return (updateTeam(this.state.team_id, {k: this.state.updatedPlayer.displayName}))
      default :
        return ('nothing')
    }
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
                allTeams={this.state.allTeams}
                setSelectedTeam={this.setSelectedTeam}/>}
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