import {getUserByUsername} from "../service/userService";

export const fetchUser = async (username) => {
    let errorMsg = null
    let showDanger = false
    const [returnData, errorMessage] = await getUserByUsername(username)

    if (errorMessage) {
        errorMsg = errorMessage
        showDanger = true
    } else if (!returnData) {
        errorMsg = {"name": "UserNotFound", "message": `Пользователь ${username} не найден`}
        showDanger = true
    }

    return {"data": returnData, "error": errorMsg, "danger": showDanger}
}