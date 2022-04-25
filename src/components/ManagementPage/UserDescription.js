import React, {useContext, useRef, useState} from "react";
import {DangerAlert} from "../alerts/DangerAlert";
import {Spinner} from "../spinner/Spinner";
import {deleteUser, updateUser, updateUserRole} from "../../api/service/userService";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {fetchUser} from "../../api/fetch/fetchUser";

export const UserDescription = ({user}) => {
    const {username, roleArray} = useContext(AuthContext)
    const newUsername = useRef("")
    const newPassword = useRef("")
    const [adminCheck, setAdminCheck] = useState(user["roles"].some(role => role.name === "ADMIN"))
    const [leadCheck, setLeadCheck] = useState(user["roles"].some(role => role.name === "LEAD"))
    const [showSpinner, setShowSpinner] = useState(false)
    const [showDanger, setShowDanger] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const navigate = useNavigate()

    const handleCheck = (type, e) => {
        if (type === "ADMIN") setAdminCheck(e.target.checked)
        if (type === "LEAD") setLeadCheck(e.target.checked)
    }

    const handleSubmit = async () => {
        setShowSpinner(true)

        if (user["roles"].some(role => role.name === "ADMIN") !== adminCheck) {
            const changeRoleForm = {
                "requestType": "",
                "roleName": "ADMIN"
            }

            if (adminCheck) changeRoleForm["requestType"] = "ADD"
            else changeRoleForm["requestType"] = "REMOVE"

            const [, errorMessage] = await updateUserRole(changeRoleForm, user["id"])

            if (errorMessage) {
                setErrorMsg(errorMessage)
                setShowSpinner(false)
                setShowDanger(true)

                return
            }
        }

        if (user["roles"].some(role => role.name === "LEAD") !== leadCheck) {
            const changeRoleForm = {
                "requestType": "",
                "roleName": "LEAD"
            }

            if (leadCheck) changeRoleForm["requestType"] = "ADD"
            else changeRoleForm["requestType"] = "REMOVE"

            const [, errorMessage] = await updateUserRole(changeRoleForm, user["id"])

            if (errorMessage) {
                setErrorMsg(errorMessage)
                setShowSpinner(false)
                setShowDanger(true)

                return
            }
        }

        const userRes = await fetchUser(user["username"])
        setErrorMsg(userRes["error"])
        setShowDanger(userRes["danger"])

        if (newUsername.current.trim() !== "") userRes["data"]["username"] = newUsername.current.trim()
        if (newPassword.current.trim() !== "") userRes["data"]["password"] = newPassword.current.trim()

        const [, errorMessage] = await updateUser(userRes["data"])
        if (errorMessage) {
            setErrorMsg(errorMessage)
            setShowSpinner(false)
            setShowDanger(true)

            return
        }

        if (newUsername.current.trim() !== "" && username !== newUsername.current.trim()) {
            const cookie = new Cookies()
            cookie.remove("authToken")
            setShowSpinner(false)
            navigate("/", {replace: true})
            window.location.reload()
        }

        newUsername.current = ""
        newPassword.current = ""

        setShowSpinner(false)
        window.location.reload()
    }

    const handleDelete = async () => {
        setShowSpinner(true)

        const [, errorMessage] = await deleteUser(user["id"])

        if (errorMessage) {
            setErrorMsg(errorMessage)
            setShowSpinner(false)
            setShowDanger(true)

            return
        }

        setShowSpinner(false)
        window.location.reload()
    }

    return (
        <div className="flex justify-center">
            <div className="block rounded-lg shadow-lg bg-white w-full text-center">
                <div className="py-3 px-6 border-b border-gray-300">
                    {user["name"]} {user["lastname"]}
                    <div className="text-gray-400">
                        {user["roles"].some(role => role.name === "ADMIN") ? "Администратор" :
                            user["roles"].some(role => role.name === "LEAD") ? "Глава команды" : "Участник"}
                    </div>
                </div>
                <div className="px-5 text-left">
                    <div className="m-3 font-medium text-gray-800">
                        <div className="text-gray-400">Имя пользователя</div>
                        <div className="pt-2">
                            <label htmlFor="username" className="sr-only">
                                Имя пользователя
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                onChange={e => newUsername.current = e.target.value}
                                required
                                className="text-lg appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                placeholder="Имя пользователя"
                            />
                        </div>
                    </div>
                    <div className="m-3 font-medium text-gray-800">
                        <div className="text-gray-400">Пароль</div>
                        <div className="pt-2">
                            <label htmlFor="password" className="sr-only">
                                Пароль
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="password"
                                onChange={e => newPassword.current = e.target.value}
                                required
                                className="text-lg appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                placeholder="Пароль"
                            />
                        </div>
                    </div>
                    <div className="m-3 font-medium text-gray-800">
                        <div className="text-gray-400">Роли</div>
                        <ul className="overflow-y-auto max-h-56 text-sm space-y-2 text-left">
                            <li
                                className="flex justify-start items-center my-2 p-2 border rounded-md">
                                <input
                                    type="checkbox"
                                    checked={Boolean(adminCheck)}
                                    onChange={e => handleCheck("ADMIN", e)}
                                    className="h-4 w-4 cursor-pointer text-indigo-600 focus:ring-teal-500 border-gray-300"
                                />
                                <div className="m-2 ml-3">
                                    Администратор
                                </div>
                            </li>
                            <li
                                className="flex justify-start items-center my-2 p-2 border rounded-md">
                                <input
                                    type="checkbox"
                                    checked={Boolean(leadCheck)}
                                    onChange={e => handleCheck("LEAD", e)}
                                    className="h-4 w-4 cursor-pointer text-indigo-600 focus:ring-teal-500 border-gray-300"
                                />
                                <div className="m-2 ml-3">
                                    Глава команды
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="mx-2 inline-block px-6 py-2.5 bg-teal-accent-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-accent-700 hover:shadow-lg focus:bg-teal-accent-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-accent-800 active:shadow-lg transition duration-150 ease-in-out">
                        Сохранить изменения
                    </button>
                    {roleArray.includes("ROLE_ADMIN") && (
                        <button
                            type="button"
                            onClick={handleDelete}
                            className="mx-2 inline-block px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                            Удалить пользователя
                        </button>
                    )}
                    {showDanger && (
                        <DangerAlert dangerMessage={errorMsg} />
                    )}
                    {showSpinner && (
                        <Spinner />
                    )}
                </div>
            </div>
        </div>
    )
}