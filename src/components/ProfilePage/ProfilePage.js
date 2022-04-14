import {useState} from "react";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom";

export const ProfilePage = () => {
    const [logoutModal, setLogoutModal] = useState(false)
    const navigate = useNavigate()

    let profilePageClasses = "grid grid-cols-2"
    if (logoutModal) profilePageClasses += " blur"

    const handleLogout = () => {
        setLogoutModal(false)

        const cookie = new Cookies()
        cookie.remove("authToken")
        sessionStorage.removeItem("authToken")
        navigate("/")
        window.location.reload()
    }

    return (
        <div className="px-4 py-16 items-end mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className={profilePageClasses}>
                <div className="grid grid-cols-1 gap-4 max-w-screen-sm items-center text-left space-x-4 mb-5">
                    <div className="space-y-1 font-medium text-gray-800">
                        <img className="rounded w-56 h-56" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSK1mi4O2s4RYI03ohZ62KyBT3HRe69-xXNQ&usqp=CAU"
                             alt="avatar" />

                    </div>
                    <div className="space-y-1 font-medium text-gray-800">
                        <div className="text-gray-400">Администратор</div>
                        <div className="text-lg font-bold text-gray-800">AdminName AdminLastname</div>
                    </div>
                    <div className="mt-3 space-y-1 font-medium text-gray-800">
                        <div className="text-gray-400">Имя пользователя</div>
                        <div className="text-lg">admin</div>
                    </div>
                    <div className="space-y-1 font-medium text-gray-800">
                        <div className="text-gray-400">Почта</div>
                        <div className="text-lg">admin@admin.mint.ru</div>
                    </div>
                    <div className="pt-3">
                        <button type="button"
                                onClick={_ => setLogoutModal(true)}
                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                            Выйти из системы
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className="pb-5">
                        <div className="font-light text-2xl">Изменить данные</div>
                        <form className="mt-8 space-y-6 max-w-screen-sm" method="POST">
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
                                        // onChange={e => setName(e.target.value)}
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
                                        // onChange={e => setLastname(e.target.value)}
                                        autoComplete="lastname"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                        placeholder="Фамилия"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="username" className="sr-only">
                                        Имя пользователя
                                    </label>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        // onChange={e => setUsername(e.target.value)}
                                        autoComplete="username"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                        placeholder="Имя пользователя"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="group relative max-w-xs flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-accent-400 hover:bg-teal-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                >
                                    Сохранить изменения
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="font-light text-2xl">Изменить пароль</div>
                        <form className="mt-8 space-y-6 max-w-screen-sm" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div className="pb-3">
                                    <label htmlFor="password" className="sr-only">
                                        Текущий пароль
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        // onChange={e => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                        placeholder="Текущий пароль"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Новый пароль
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        // onChange={e => setPassword(e.target.value)}
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                        placeholder="Новый пароль"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="group relative max-w-xs flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-accent-400 hover:bg-teal-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                >
                                    Сохранить изменения
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {logoutModal && (
                <div id="logoutModal" tabIndex="-1" aria-hidden="true"
                     className="justify-center items-center flex overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-modal md:h-full">
                    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        <div className="relative rounded-lg shadow bg-deep-purple-accent-400">
                            <div className="flex justify-between items-start p-5 rounded-t">
                                <h3 className="text-xl font-semibold text-deep-purple-50 lg:text-2xl">
                                    Выход из системы
                                </h3>
                                <button type="button"
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
                                        onClick={_ => setLogoutModal(false)}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="p-6 space-y-6 text-left">
                                <p className="text-base leading-relaxed text-deep-purple-50">
                                    Вы действительно хотите выйти из системы?
                                </p>
                            </div>
                            <div
                                className="flex items-center p-6 space-x-2 rounded-b">
                                <button onClick={_ => handleLogout()} type="button"
                                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    Выход
                                </button>
                                <button onClick={_ => setLogoutModal(false)} type="button"
                                        className="text-gray-800 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                                >
                                    Отмена
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}