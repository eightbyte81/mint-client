import axios from "axios"
import Cookies from "universal-cookie"
import serverApiUrl from "../env"
import {deleteById, getAll, getById} from "./mainService";

const requestUrl = `${serverApiUrl}/activity`

async function getAllActivities() {
    return getAll(requestUrl)
}

async function getAllActivitiesByUser(id) {
    return getById(requestUrl, id)
}

async function createActivity(activity) {
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
            data: activity
        })

        returnData = res.data
    } catch (error) {
        errorMessage = error
    }

    return [returnData, errorMessage]
}

async function addChildActivity(activity, id) {
    let returnData = null
    let errorMessage = null
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
        errorMessage = error
    }

    return [returnData, errorMessage]
}

async function addActivityToUser(activityId, userId) {
    let returnData = null
    let errorMessage = null
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
        errorMessage = error
    }

    return [returnData, errorMessage]
}

async function updateActivityStatus(updateActivityStatusForm) {
    let returnData = null
    let errorMessage = null
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
        errorMessage = error
    }

    return [returnData, errorMessage]
}

async function deleteActivity(id) {
    return deleteById(requestUrl, id)
}

export {getAllActivities, getAllActivitiesByUser, createActivity,
    addChildActivity, addActivityToUser, updateActivityStatus, deleteActivity}