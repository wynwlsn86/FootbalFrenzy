import axios from 'axios'
const URL = 'http://localhost:4567'

export const fetchAllUsers = async () => {
  try {
    const allUsers = await axios.get(`${URL}/leagues/1/team/1/users/1`)
    //change the last 1 to a refrence to the usr passed dow
    return allUsers.data
  }
  catch (e) {
    console.log(e.message)
  }
}
export const fetchLeagueTeams = async (league_id) => {
  const leagueTeams = await axios.get(`${URL}/teams/1/leagues/${league_id}`)
  return leagueTeams.data
}
export const login = async (params) => {
  try{
    const login = await axios.get(`${URL}/leagues/1/team/1/users`)
    let user = login.data.find(user => {
      return user.email == params.email})
    let userId = user.id
    const userData = await axios.get(`${URL}/leagues/1/team/1/users/${userId}`)
    return userData.data
  }
  catch(e){
  }
}

export const fetchAllTeams = async () => {
  try{
    const allTeams = await axios.get(`${URL}/players/1/teams`)
    return allTeams.data
  }
  catch(e){
    console.log(e.message)
  }
}

export const fetchTeam = async (team_id) => {
  try{
    const team = await axios.get(`${URL}/players/1/teams/${team_id}`)
    console.log('selected team', team.data)
    return team.data
  }
  catch(e){
    console.log(e.message)
  }
}

export const fetchAllPlayers = async () => {
  try {
    const allPlayers = await axios.get(`${URL}/players`)
    return allPlayers.data
  }
  catch(e){
    console.log(e.message)
  }
}
// export const createTeam = async  (user_id, params) => {
//   try{
//     const team = await axios.post(``, params)
//     console.log(team.data)
//     return team.data
//   }
//   catch(e){
//     console.log(e.message)
//   }
// }
export const updatePlayersTeam = async (player_id, params) => {
  try{
    console.log(player_id)
    const player = await axios.put(`${URL}/players/${player_id}`, params)
    console.log(player.data)
    return player.data
  }
  catch(e){
    console.log(e.message)
  }
}
export const updateTeam = async (team_id, params) => {
  try{
    console.log(params, 'parms')
    const team = await axios.put(`${URL}/players/1/teams/${team_id}`, params)
    console.log(team.data)
    return team.data
  }
  catch(e){
    console.log(e.message)
  }
}

export const createTeam = async (params) => {
  try{
    const newTeam = await axios.post(`${URL}/players/1/teams/`, params)
    console.log(newTeam.data, 'teamcreated')
    return newTeam.data
  }
  catch(e){
    console.log(e.message)
  }
}

export const fetchPlayer = async(player_id) => {
  try{
    const player = await axios.get(`${URL}/players/${player_id}`)
    console.log(player.data)
  }
  catch(e){
    console.log(e.message)
  }
}