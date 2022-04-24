import {getAllUsers} from "../service/userService";

export const fetchAllUsers = async () => {
    let errorMsg = null
    let showDanger = false
    const [returnData, errorMessage] = await getAllUsers()

    if (errorMessage) {
        errorMsg = errorMessage
        showDanger = true
    } else if (!returnData) {
        errorMsg = {"name": "UsersNotFound", "message": `Пользователи не найдены`}
        showDanger = true
    }

    return {"data": returnData, "error": errorMsg, "danger": showDanger}
}