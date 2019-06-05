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
      team_id: null,
      search: null
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

  handleFormChange = (e) => {
    const { name, value } = e.target;    
    this.setState({ [name]: value });
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
    let team = this.state.allTeams.filter(team => {
      return team.id == e.target.id
    })
    this.setState({selectedTeam: team[0]})
  }

  updatePosition = async(e) => {
    switch(this.state.updatedPlayer.position){
      case "QB" : 
            return (updateTeam(this.state.team_id, {qb: this.state.updatedPlayer.displayName}))
      case "RB" :
        if(!this.state.selectedTeam.rb1){
          return (updateTeam(this.state.team_id, {rb1: this.state.updatedPlayer.displayName}))
        }
        else{
          return (updateTeam(this.state.team_id, {rb2: this.state.updatedPlayer.displayName}))
        }
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
                search={this.state.search}
                allPlayers={this.state.allPlayers}
                updateUserData={this.updateUserData}
                handleFormChange={this.handleFormChange}
                />}
                
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