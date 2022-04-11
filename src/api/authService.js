import axios from "axios"
import Cookies from "universal-cookie"
import {decodeJwt} from "jose"
import serverApiUrl from "./env"

const requestUrl = `${serverApiUrl}/auth`

async function register(user) {
    let returnData = null

    try {
        let res = await axios({
            url: `${requestUrl}/register`,
            method: "POST",
            data: user
        })

        returnData = res.data
    } catch (error) {
        console.log(error)
    }

    return returnData
}

async function login(loginUser) {
    let authToken = null
    const cookies = new Cookies()

    try {
        let res = await axios({
            url: `${requestUrl}/login`,
            method: "POST",
            data: loginUser
        })

        authToken = res.data
        const {exp} = decodeJwt(authToken['token'])
        cookies.set('authToken', authToken['token'], {expires: new Date(exp * 1000)})
    } catch (error) {
        console.log(error)
    }

    return authToken
}

export {register, login}