import Cookies from "universal-cookie";
import axios from "axios";

async function getAll(requestUrl) {
    let returnData = null
    let errorMessage = null
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
        errorMessage = error
    }

    return [returnData, errorMessage]
}

async function getById(requestUrl, id) {
    let returnData = null
    let errorMessage = null
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
        errorMessage = error
    }

    return [returnData, errorMessage]
}

async function deleteById(requestUrl, id) {
    let returnData = null
    let errorMessage = null
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
        errorMessage = error
    }

    return [returnData, errorMessage]
}

export {getAll, getById, deleteById}