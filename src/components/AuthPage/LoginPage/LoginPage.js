import {login} from "../../../api/authService";
import {useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {DangerAlert} from "../../alerts/DangerAlert";
import {Spinner} from "../../spinner/Spinner";

export const LoginPage = () => {
    const username = useRef('')
    const password = useRef('')
    const [isRemembered, setIsRemembered] = useState(false)
    const [showDanger, setShowDanger] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)

    let navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault()
        if (showDanger) setShowDanger(false)
        setShowSpinner(true);

        const loginUser = {
            "username": username.current.trim(),
            "password": password.current.trim()
        }

        const token = await login(loginUser, isRemembered)
        if (token === null) {
            setShowSpinner(false)
            setShowDanger(true)
            return
        }

        username.current = ''
        password.current = ''
        setIsRemembered(false)

        navigate("/profile", {replace: true})
        window.location.reload()
    }

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="MINT"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Войдите в аккаунт</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="pb-3">
                            <label htmlFor="username" className="sr-only">
                                Имя пользователя
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="username"
                                onChange={e => username.current = e.target.value}
                                autoComplete="username"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                placeholder="Имя пользователя"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Пароль
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={e => password.current = e.target.value}
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                placeholder="Пароль"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                onChange={_ => setIsRemembered(currentIsRemembered => !currentIsRemembered)}
                                className="h-4 w-4 text-indigo-600 focus:ring-teal-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Запомнить меня
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link to="/forgot-password" className="font-medium text-teal-600 hover:text-teal-500">
                                Забыли пароль?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-accent-400 hover:bg-teal-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            Войти
                        </button>
                    </div>
                </form>
                {showSpinner && (
                    <Spinner />
                )}
                {showDanger && (
                    <DangerAlert />
                )}
            </div>
        </div>
    )
}