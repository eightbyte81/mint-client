import {getAllActivitiesByUser} from "../service/activityService";

export const fetchUserActivities = async (id) => {
    let errorMsg = null
    let showDanger = false

    const [returnData, errorMessage] = await getAllActivitiesByUser(id)

    if (errorMessage) {
        errorMsg = errorMessage
        showDanger = true
    } else if (!returnData) {
        errorMsg = {"name": "ActivitiesNotFound", "message": `Задачи пользователя ${id} не найдены`}
        showDanger = true
    }

    return {"data": returnData, "error": errorMsg, "danger": showDanger}
}