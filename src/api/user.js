import axios from "axios"
import Cookies from "universal-cookie"
import serverApiUrl from "./env"

const requestUrl = `${serverApiUrl}/user`

async function getAllUsers() {
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

async function getUserById(id) {
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

async function updateUser(user) {
    let returnData = null
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
        console.log(error)
    }

    return returnData
}

async function updateUserRole(changeRoleForm, id) {
    let returnData = null
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
        console.log(error)
    }

    return returnData
}

async function deleteUser(id) {
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

export {getAllUsers, getUserById, updateUser, updateUserRole, deleteUser}