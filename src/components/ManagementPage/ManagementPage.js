export const ManagementPage = () => {
    return (
        <div className="px-4 py-16 items-end mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid grid-cols-2 grid-rows-2 gap-20">
                <div className="max-w-full">
                    <div className="ml-6 text-left">
                        <p className="mb-2 text-lg font-bold">Список пользователей</p>
                    </div>
                    <ul className="overflow-y-auto max-h-56 pt-3 px-8 space-y-2 text-left">
                        <li
                            className="flex justify-start my-2 p-2 border rounded-md">
                            <img className="rounded-full ml-3 w-10 h-10" src="https://i1.sndcdn.com/artworks-000550908456-f1jqua-t500x500.jpg" alt="avatar" />
                            <div className="m-2 ml-3">
                                Валерий Жмышенко
                            </div>
                        </li>
                        <li
                            className="flex justify-start my-2 p-2 border rounded-md">
                            <img className="rounded-full ml-3 w-10 h-10" src="https://i1.sndcdn.com/artworks-000550908456-f1jqua-t500x500.jpg" alt="avatar" />
                            <div className="m-2 ml-3">
                                Валерий Жмышенко
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex relative justify-center">
                    <div className="block rounded-lg shadow-lg bg-white w-full text-center">
                        <div className="py-3 px-6 border-b border-gray-300">
                            Имя Фамилия
                            <div className="text-gray-400">Администратор</div>
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
                                        // onChange={e => setLastname(e.target.value)}
                                        autoComplete="username"
                                        required
                                        className="text-lg appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                        placeholder="Имя пользователя"
                                    />
                                </div>
                            </div>
                            <div className="m-3 font-medium text-gray-800">
                                <div className="text-gray-400">Почта</div>
                                <div className="pt-2">
                                    <label htmlFor="email" className="sr-only">
                                        Почта
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        // onChange={e => setLastname(e.target.value)}
                                        autoComplete="email"
                                        required
                                        className="text-lg appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                                        placeholder="Почта"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 py-3 px-6 border-t border-gray-300 text-gray-600">
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
                <div className="max-w-full">
                    <div className="ml-6 text-left">
                        <p className="mb-2 text-lg font-bold">Список команд</p>
                    </div>
                    <ul className="overflow-y-auto max-h-56 pt-3 px-8 space-y-2 text-left">
                        <li
                            className="flex justify-start my-2 p-2 border rounded-md">
                            <div className="m-2 ml-3">
                                Команда
                            </div>
                        </li>
                        <li
                            className="flex justify-start my-2 p-2 border rounded-md">
                            <div className="m-2 ml-3">
                                Команда
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <div className="block rounded-lg shadow-lg bg-white w-full text-center">
                        <div className="py-3 px-6 border-b border-gray-300">
                            Название команды
                        </div>
                        <div className="px-5 text-left">
                            <div className="m-3 font-medium text-gray-800">
                                <div className="text-gray-400">Главы команды</div>
                                <div className="text-lg">
                                    <ul className="overflow-y-auto max-h-56 text-left">
                                        <li
                                            className="flex justify-between items-center my-2 px-2 border rounded-md">
                                            <div className="m-2 ml-3">
                                                Команда
                                            </div>
                                            <button className="flex flex-row-reverse items-center">
                                                <svg className="w-6 h-6" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </li>
                                        <li
                                            className="flex justify-between items-center my-2 px-2 border rounded-md">
                                            <div className="m-2 ml-3">
                                                Команда
                                            </div>
                                            <button className="flex flex-row-reverse items-center">
                                                <svg className="w-6 h-6" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="m-3 font-medium text-gray-800">
                                <div className="text-gray-400">Список участников</div>
                                <div className="text-lg">
                                    <ul className="overflow-y-auto max-h-56 text-left">
                                        <li
                                            className="flex justify-between items-center my-2 px-2 border rounded-md">
                                            <div className="m-2 ml-3">
                                                Участник
                                            </div>
                                            <button className="flex flex-row-reverse items-center">
                                                <svg className="w-6 h-6" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </li>
                                        <li
                                            className="flex justify-between items-center my-2 px-2 border rounded-md">
                                            <div className="m-2 ml-3">
                                                Участник
                                            </div>
                                            <button className="flex flex-row-reverse items-center">
                                                <svg className="w-6 h-6" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                            <button type="button"
                                    className="mx-2 inline-block px-6 py-2.5 bg-teal-accent-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-accent-700 hover:shadow-lg focus:bg-teal-accent-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-accent-800 active:shadow-lg transition duration-150 ease-in-out">
                                Сохранить изменения
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}