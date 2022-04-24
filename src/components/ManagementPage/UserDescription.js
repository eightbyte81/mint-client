import {useRef} from "react";

export const UserDescription = ({user}) => {
    const username = useRef("")
    const password = useRef("")

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
                                onChange={e => username.current = e.target.value}
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
                                onChange={e => password.current = e.target.value}
                                required
                                className="text-lg appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                placeholder="Пароль"
                            />
                        </div>
                    </div>
                    <div className="m-3 font-medium text-gray-800">
                        <div className="text-gray-400">Роли</div>
                        {/*TODO: Create list of roles*/}
                    </div>
                </div>
                <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <button type="button"
                            className="mx-2 inline-block px-6 py-2.5 bg-teal-accent-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-accent-700 hover:shadow-lg focus:bg-teal-accent-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-accent-800 active:shadow-lg transition duration-150 ease-in-out">
                        Сохранить изменения
                    </button>
                    <button type="button"
                            className="mx-2 inline-block px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                        Удалить пользователя
                    </button>
                </div>
            </div>
        </div>
    )
}