import axios from "axios"
import Cookies from "universal-cookie"
import serverApiUrl from "./env"

const requestUrl = `${serverApiUrl}/team`

async function getAllTeams() {
    let returnData = null
    const cookies = new Cookies()

    try {
        let res = await axios({
            url: `${requestUrl}/`,
            method: "GET",
            headers: {
                'Authorization': `Bearer ${cookies.get('authToken')}`
            }
        })

        returnData = res.data
    } catch (error) {
        console.log(error)
    }

    return returnData
}

async function getTeamById(id) {
    let returnData = null
    const cookies = new Cookies()

    try {
        let res = await axios({
            url: `${requestUrl}/${id}`,
            method: "GET",
            headers: {
                'Authorization': `Bearer ${cookies.get('authToken')}`
            }
        })

        returnData = res.data
    } catch (error) {
        console.log(error)
    }

    return returnData
}

async function addTeam(team) {
    let returnData = null
    const cookies = new Cookies()

    try {
        let res = await axios({
            url: `${requestUrl}/`,
            method: "POST",
            headers: {
                'Authorization': `Bearer ${cookies.get('authToken')}`
            },
            data: team
        })

        returnData = res.data
    } catch (error) {
        console.log(error)
    }

    return returnData
}

async function addUserToTeam(userToTeamForm) {
    let returnData = null
    const cookies = new Cookies()

    try {
        let res = await axios({
            url: `${requestUrl}/add-user-to-team`,
            method: "POST",
            headers: {
                'Authorization': `Bearer ${cookies.get('authToken')}`
            },
            data: userToTeamForm
        })

        returnData = res.data
    } catch (error) {
        console.log(error)
    }

    return returnData
}

async function updateTeam(team) {
    let returnData = null
    const cookies = new Cookies()

    try {
        let res = await axios({
            url: `${requestUrl}/`,
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${cookies.get('authToken')}`
            },
            data: team
        })

        returnData = res.data
    } catch (error) {
        console.log(error)
    }

    return returnData
}

async function deleteTeam(id) {
    let returnData = null
    const cookies = new Cookies()

    try {
        let res = await axios({
            url: `${requestUrl}/${id}`,
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${cookies.get('authToken')}`
            }
        })

        returnData = res.data
    } catch (error) {
        console.log(error)
    }

    return returnData
}

export {getAllTeams, getTeamById, addTeam, addUserToTeam, updateTeam, deleteTeam}