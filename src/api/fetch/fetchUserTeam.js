import {fetchUser} from "./fetchUser";
import {fetchTeam} from "./fetchTeam";

export const fetchUserTeam = async (username) => {
    let errorMsg = null
    let showDanger = false

    const userRes = await fetchUser(username)

    if (userRes["danger"]) {
        errorMsg = userRes["error"]
        showDanger = userRes["danger"]
    }

    const teamRes = await fetchTeam(userRes["data"])

    if (teamRes["danger"]) {
        errorMsg = teamRes["error"]
        showDanger = teamRes["danger"]
    }

    return {"team": teamRes["data"], "user": userRes["data"], "error": errorMsg, "danger": showDanger}
}