import axios from "axios"
import Cookies from "universal-cookie"
import serverApiUrl from "../env"
import {deleteById, getAll, getById} from "./mainService";

const requestUrl = `${serverApiUrl}/user`

async function getAllUsers() {
    return getAll(requestUrl)
}

async function getUserById(id) {
    return getById(requestUrl, id)
}

async function getUserByUsername(username) {
    let returnData = null
    let errorMessage = null
    const cookies = new Cookies()

    try {
        let res = await axios({
            url: `${requestUrl}/find-by-username`,
            method: "GET",
            headers: {
                'Authorization': `Bearer ${cookies.get('authToken')}`
            },
            params: {
                "username": username
            }
        })

        returnData = res.data
    } catch (error) {
        errorMessage = error
    }

    return [returnData, errorMessage]
}

async function updateUser(user) {
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
            data: user
        })

        returnData = res.data
    } catch (error) {
        errorMessage = error
    }

    return [returnData, errorMessage]
}

async function updateUserRole(changeRoleForm, id) {
    let returnData = null
    let errorMessage = null
    const cookies = new Cookies()

    try {
        let res = await axios({
            url: `${requestUrl}/${id}`,
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${cookies.get('authToken')}`
            },
            data: changeRoleForm
        })

        returnData = res.data
    } catch (error) {
        errorMessage = error
    }

    return [returnData, errorMessage]
}

async function deleteUser(id) {
    return deleteById(requestUrl, id)
}

export {getAllUsers, getUserById, getUserByUsername, updateUser, updateUserRole, deleteUser}