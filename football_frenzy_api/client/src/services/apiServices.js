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

export const fetchAllTeams = async () => {
  try{
    const allTeams = await axios.get(`${URL}/players/1/teams`)
    return allTeams.data
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

export const fetchPlayer = async(player_id) => {
  try{
    const player = await axios.get(`${URL}/players/${player_id}`)
    console.log(player.data)
  }
  catch(e){
    console.log(e.message)
  }
}