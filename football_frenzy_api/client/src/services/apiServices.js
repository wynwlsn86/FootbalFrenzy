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

export const updateUser = async (params) => {
  try{
    const user = await axios.put(`${URL}/leagues/1/team/1/users/1`, params)
    console.log(user.data)
  }
  catch(e){
    console.log(e.message)
  }
}