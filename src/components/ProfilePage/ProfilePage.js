import {useState} from "react";
import {LogoutModal} from "./LogoutModal";
import {ImageUploadModal} from "./ImageUploadModal";

export const ProfilePage = () => {
    const [logoutModal, setLogoutModal] = useState(false)
    const [imageUploadModal, setImageUploadModal] = useState(false)

    let profilePageClasses = "grid grid-cols-2"
    if (logoutModal || imageUploadModal) profilePageClasses += " opacity-25"

    const handleLogoutModalButtons = (value) => {
        setLogoutModal(value)
    }

    const handleImageUploadModalButtons = (value) => {
        setImageUploadModal(value)
    }

    return (
        <div className="px-4 py-16 items-end mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className={profilePageClasses}>
                <div className="grid grid-cols-1 gap-4 max-w-screen-sm items-center text-left space-x-4 mb-5">
                    <div className="space-y-1 font-medium text-gray-800">
                        <button onClick={_ => setImageUploadModal(true)}>
                            <img className="rounded w-56 h-56" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSK1mi4O2s4RYI03ohZ62KyBT3HRe69-xXNQ&usqp=CAU"
                                 alt="avatar"/>
                        </button>

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
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-b-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
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
                <LogoutModal handleModalButtons={handleLogoutModalButtons} />
            )}
            {imageUploadModal && (
                <ImageUploadModal handleModalButtons={handleImageUploadModalButtons} />
            )}
        </div>
    )
}