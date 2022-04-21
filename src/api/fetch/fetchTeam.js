import {getTeamById} from "../service/teamService";

export const fetchTeam = async (user) => {
    let errorMsg = null
    let showDanger = false

    const [returnData, errorMessage] = (user["team"] !== null)
        ?
        await getTeamById(user["team"]["id"])
        : [null, {"name": "TeamNotFound", "message": `Команда не найдена`}]


    if (errorMessage) {
        errorMsg = errorMessage
        showDanger = true
    } else if (!returnData) {
        errorMsg = {"name": "TeamNotFound", "message": `Команда ${user["team"]["name"]} не найдена`}
        showDanger = true
    }

    return {"data": returnData, "error": errorMsg, "danger": showDanger}
}