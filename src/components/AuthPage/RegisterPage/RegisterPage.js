import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {register} from "../../../api/authService";
import {DangerAlert} from "../../alerts/DangerAlert";
import {Spinner} from "../../spinner/Spinner";

export const RegisterPage = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showDanger, setShowDanger] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)

    let navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault()
        if (showDanger) setShowDanger(false)
        setShowSpinner(true);

        const user = await register({name, lastname, username, email, password, "enabled": false })
        if (user === null) {
            setShowSpinner(false)
            setShowDanger(true)
            return
        }

        setName('')
        setLastname('')
        setUsername('')
        setEmail('')
        setPassword('')

        navigate("/login", {replace: true})
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
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Регистрация в системе</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="pb-3">
                            <label htmlFor="name" className="sr-only">
                                Имя
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={e => setName(e.target.value)}
                                autoComplete="name"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                placeholder="Имя"
                            />
                        </div>
                        <div className="pb-3">
                            <label htmlFor="lastname" className="sr-only">
                                Фамилия
                            </label>
                            <input
                                id="lastname"
                                name="lastname"
                                type="text"
                                onChange={e => setLastname(e.target.value)}
                                autoComplete="lastname"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                placeholder="Фамилия"
                            />
                        </div>
                        <div className="pb-3">
                            <label htmlFor="username" className="sr-only">
                                Имя пользователя
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                onChange={e => setUsername(e.target.value)}
                                autoComplete="username"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                placeholder="Имя пользователя"
                            />
                        </div>
                        <div className="pb-3">
                            <label htmlFor="email" className="sr-only">
                                Почта
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                placeholder="Почта"
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
                                onChange={e => setPassword(e.target.value)}
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                placeholder="Пароль"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-accent-400 hover:bg-teal-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            Зарегистрироваться
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