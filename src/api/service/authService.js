import axios from "axios"
import Cookies from "universal-cookie"
import {decodeJwt} from "jose"
import serverApiUrl from "../env"

const requestUrl = `${serverApiUrl}/auth`

async function register(user) {
    let returnData = null
    let errorMessage = null

    try {
        let res = await axios({
            url: `${requestUrl}/register`,
            method: "POST",
            data: user
        })

        returnData = res.data
    } catch (error) {
        errorMessage = error
    }

    return [returnData, errorMessage]
}

async function login(loginUser, isRemembered) {
    let authToken = null
    let errorMessage = null
    const cookies = new Cookies()

    try {
        let res = await axios({
            url: `${requestUrl}/login`,
            method: "POST",
            data: loginUser
        })

        authToken = res.data

        cookies.remove('authToken')
        if (isRemembered) {
            const {exp} = decodeJwt(authToken['token'])
            cookies.set('authToken', authToken['token'], {expires: new Date(exp * 1000)})
        } else {
            cookies.set('authToken', authToken['token'])
        }
    } catch (error) {
        errorMessage = error
    }

    return [authToken, errorMessage]
}

export {register, login}