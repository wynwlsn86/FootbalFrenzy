import React, { Component } from 'react';
import LandingPage from '../LandingPage.jsx/LandingPage'
import Dashboard from '../Dashboard/Dashboard'
import {Route, Switch} from 'react-router-dom'
// import League from '../League/League'
import {
  fetchAllUsers,
  fetchAllPlayers,
  updatePlayersTeam,
  fetchAllTeams,
  fetchPlayer,
  fetchTeam,
  updateTeam,
  fetchLeagueTeams
} from '../../services/apiServices'
import Team from '../Team/Team'
import WaiverWire from '../WaiverWire/WaiverWire';
import TeamLeagues from '../TeamLeagues/TeamLeagues'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      leagues: [],
      selectedLeague: null,
      teams: [],
      email: [],
      allTeams: [],
      allPlayers: [],
      updatedPlayer: {},
      league_id: null,
      team_id: null,
      search: null,
      user: null,
      selectedTeam: null,
      temp: null,
      initalTeam: false
    }
  }
  componentDidMount = () => {
      this.fetchUserData();
      this.fetchPlayerData();
  }

  fetchSelectedTeamData = async (id) => {
    const selectedTeam = await fetchTeam(id);
    this.setState({selectedTeam})
  }

  setSelectedLeague = async (league_id) => {
    const selectedLeague = await fetchLeagueTeams(league_id)
    this.setState({selectedLeague})
  }

  setLeagueId = (e) => {
    let leagueid = e.target.id
    console.log('setting leagueid')
    this.setState({league_id: leagueid})
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
    e.preventDefault();
    console.log('update user running')
    // const teamid = e.target.id[0]
    // this.setState({team_id: teamid})
    // const playerid = e.target.id.split(',')[1]
    await this.setState({temp: e.target.id})
    const teamid = this.state.selectedTeam.id
    this.setState({team_id: teamid})
    const playerid = this.state.temp.split(',')[1]
    const params = {team_id: teamid}
    const player = this.state.allPlayers.find(player => player.id == playerid)
    await this.setState({updatedPlayer: player, team_id: teamid})
        if(this.state.updatedPlayer.team_id == null){
          
          await updatePlayersTeam(playerid, params)
          await this.updatePosition(e)
          this.fetchTeamData(teamid);
        }
        else{
          alert('player already selected')
        }
    const team = await fetchTeam(this.state.team_id);
    console.log(team, 'team in update')
    const selectedTeam = await updateTeam(this.state.team_id, {points: 0})
    console.log(selectedTeam, 'temp')
    await this.setState({selectedTeam})
    console.log(this.state.selectedTeam, 'selected team temp')
  }

  setUser = (user) => {
    this.setState({user})
  }


  setSelectedTeam = async (team) => {
    // await this.updateUserData();
    if(!this.state.initialTeam){
      // await this.updateUserData();
      await this.setState({
        selectedTeam: team,
        initalTeam: true
      })
      console.log('i dont even care what u say')
    }
    else{
      console.log('alreadyset')
    }
  }

  updatePosition = async(e) => {
    switch(this.state.updatedPlayer.position){
      case "QB" : 
            
            return (
              updateTeam(this.state.team_id, {qb: this.state.updatedPlayer.displayName})
              )
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
            render={(props) => 
              <LandingPage 
              setUser={this.setUser}
              user={this.state.user}/>} 
            />
          {/* <Route 
            exact path={`/leagues/:id`}
            component={(props)=>
              <League 
                {...props}
                leagues={this.state.user.leagues}
                setSelectedTeam={this.setSelectedTeam}/>}
              /> */}
            <Route 
              exact path={`/teamleagues/:id`}
              component={(props)=>
                  <TeamLeagues 
                    {...props}
                    selectedTeam={this.state.selectedTeam}
                    setLeagueId={this.setLeagueId}
                    fetchUserData={this.fetchUserData}
                    setSelectedTeam={this.setSelectedTeam}
                    userTeams={this.state.user.teams}/>}
              />
          <Route 
            exact path={`/teams/:id`}
            component={(props)=>
              <Team 
                {...props}
                allPlayers={this.state.allPlayers}
                setSelectedTeam={this.setSelectedTeam}
                selectedTeam={this.state.selectedTeam}
                allTeams={this.state.AllTeams}/>}
              />
          <Route 
            exact path={`/waiverwire`}
            component={(props)=>
              <WaiverWire 
                {...props}
                fetchUserData={this.fetchUserData}
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
                fetchUserData={this.fetchUserData}
                leagues={this.state.leagues}
                fetchSelectedTeamData={this.fetchSelectedTeamData}
                allTeams={this.state.allTeams}
              />} 
          />
        </Switch>
      </div>
    );
  }
}

export default Main;