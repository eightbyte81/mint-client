import axios from "axios"
import Cookies from "universal-cookie"
import serverApiUrl from "./env"
import {deleteById, getAll, getById} from "./mainService";

const requestUrl = `${serverApiUrl}/team`

async function getAllTeams() {
    return getAll(requestUrl)
}

async function getTeamById(id) {
    return getById(requestUrl, id)
}

async function addTeam(team) {
    let returnData = null
    let errorMessage = null
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
        errorMessage = error
    }

    return [returnData, errorMessage]
}

async function addUserToTeam(userToTeamForm) {
    let returnData = null
    let errorMessage = null
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
        errorMessage = error
    }

    return [returnData, errorMessage]
}

async function updateTeam(team) {
    let returnData = null
    let errorMessage = null
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
        errorMessage = error
    }

    return [returnData, errorMessage]
}

async function deleteTeam(id) {
    return deleteById(requestUrl, id)
}

export {getAllTeams, getTeamById, addTeam, addUserToTeam, updateTeam, deleteTeam}