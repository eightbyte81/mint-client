import axios from "axios"
import Cookies from "universal-cookie"
import serverApiUrl from "./env"

const requestUrl = `${serverApiUrl}/activity`

async function getAllActivities() {
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

async function getAllActivitiesByUser(id) {
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

async function createActivity(activity) {
    let returnData = null
    const cookies = new Cookies()

    try {
        let res = await axios({
            url: `${requestUrl}/`,
            method: "POST",
            headers: {
                'Authorization': `Bearer ${cookies.get('authToken')}`
            },
            data: activity
        })

        returnData = res.data
    } catch (error) {
        console.log(error)
    }

    return returnData
}

async function addChildActivity(activity, id) {
    let returnData = null
    const cookies = new Cookies()

    try {
        let res = await axios({
            url: `${requestUrl}/child/${id}`,
            method: "POST",
            headers: {
                'Authorization': `Bearer ${cookies.get('authToken')}`
            },
            data: activity
        })

        returnData = res.data
    } catch (error) {
        console.log(error)
    }

    return returnData
}

async function addActivityToUser(activityId, userId) {
    let returnData = null
    const cookies = new Cookies()

    try {
        let res = await axios({
            url: `${requestUrl}/${activityId}/${userId}`,
            method: "POST",
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

async function updateActivityStatus(updateActivityStatusForm) {
    let returnData = null
    const cookies = new Cookies()

    try {
        let res = await axios({
            url: `${requestUrl}/update-activity-status`,
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${cookies.get('authToken')}`
            },
            data: updateActivityStatusForm
        })

        returnData = res.data
    } catch (error) {
        console.log(error)
    }

    return returnData
}

async function deleteActivity(id) {
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

export {getAllActivities, getAllActivitiesByUser, createActivity,
    addChildActivity, addActivityToUser, updateActivityStatus, deleteActivity}