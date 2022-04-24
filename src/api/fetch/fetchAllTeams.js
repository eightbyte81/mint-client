import {getAllTeams} from "../service/teamService";

export const fetchAllTeams = async () => {
    let errorMsg = null
    let showDanger = false
    const [returnData, errorMessage] = await getAllTeams()

    if (errorMessage) {
        errorMsg = errorMessage
        showDanger = true
    } else if (!returnData) {
        errorMsg = {"name": "TeamsNotFound", "message": `Команды не найдены`}
        showDanger = true
    }

    return {"data": returnData, "error": errorMsg, "danger": showDanger}
}