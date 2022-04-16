import {useRef, useState} from "react";
import {Spinner} from "../spinner/Spinner";
import {DangerAlert} from "../alerts/DangerAlert";
import {updateUser} from "../../api/userService";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom";

export const ChangeUserPassword = ({userData}) => {
    const newPassword = useRef("")
    const [showSpinner, setShowSpinner] = useState(false)
    const [showDanger, setShowDanger] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (showDanger) setShowDanger(false)
        setShowSpinner(true)

        userData["password"] = newPassword.current.trim()

        const [, errorMessage] = await updateUser(userData)
        if (errorMessage) {
            setErrorMsg(errorMessage)
            setShowSpinner(false)
            setShowDanger(true)

            return
        }

        newPassword.current = ""
        setShowSpinner(false)

        const cookie = new Cookies()
        cookie.remove("authToken")
        sessionStorage.removeItem("authToken")
        navigate("/login", {replace: true})
        window.location.reload()
    }

    return (
        <div>
            <div className="font-light text-2xl">Изменить пароль</div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Новый пароль
                        </label>
                        <input
                            id="new-password"
                            name="password"
                            type="password"
                            onChange={e => newPassword.current = e.target.value}
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                            placeholder="Новый пароль"
                        />
                    </div>
                    {/*TODO: Validate new password input*/}
                </div>
                <div>
                    {!showSpinner && (
                        <button
                            type="submit"
                            className="group relative max-w-xs flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-accent-400 hover:bg-teal-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            Сохранить изменения
                        </button>
                    )}
                    {showSpinner && (
                        <Spinner />
                    )}
                    {showDanger && (
                        <div className="pt-2">
                            <DangerAlert dangerMessage={errorMsg} />
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}