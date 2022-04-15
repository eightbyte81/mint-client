import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const {authValue, roleArray} = useContext(AuthContext)

    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <div className="flex items-center">
                    <Link
                        to="/"
                        aria-label="MINT"
                        title="MINT"
                        className="inline-flex items-center mr-8"
                    >
                        <svg width="40" height="40" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M274.01 41.3599C275.188 40.0987 277.126 40.2021 278.332 41.4358C448.536 215.505 361.093 402.633 229.5 369.5C212.859 365.31 203 387.589 175.061 365.384C41.9712 259.61 236.581 81.4538 274.01 41.3599Z" fill="#64FEDA"/>
                            <path d="M247.816 454.5C235.246 436.048 231.735 393.604 229.5 369.5M275.01 135.688C254.39 217.059 222.489 293.892 229.5 369.5M229.5 369.5C361.093 402.633 448.536 215.505 278.332 41.4358C277.126 40.2021 275.188 40.0987 274.01 41.3599C236.581 81.4538 41.9712 259.61 175.061 365.384C203 387.589 212.859 365.31 229.5 369.5Z" stroke="#01BFA5" strokeWidth="14" strokeLinecap="round"/>
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            MINT
                        </span>
                    </Link>
                    {authValue && (
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <Link
                                    to="/activities"
                                    aria-label="Задачи"
                                    title="Задачи"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Задачи
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/analytics"
                                    aria-label="Аналитика"
                                    title="Аналитика"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Аналитика
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/profile"
                                    aria-label="Профиль"
                                    title="Профиль"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Профиль
                                </Link>
                            </li>
                            {(roleArray.includes("ROLE_LEAD") || roleArray.includes("ROLE_ADMIN")) && (
                                <li>
                                    <Link
                                        to="/management"
                                        aria-label="Управление"
                                        title="Управление"
                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Управление
                                    </Link>
                                </li>
                            )}
                        </ul>
                    )}
                </div>
                {!authValue && (
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/login"
                                aria-label="Вход в систему"
                                title="Вход в систему"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Вход в систему
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/register"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                                aria-label="Регистрация"
                                title="Регистрация"
                            >
                                Регистрация
                            </Link>
                        </li>
                    </ul>
                )}
                <div className="lg:hidden">
                    <button
                        aria-label="Открыть меню"
                        title="Открыть меню"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-teal-50 focus:bg-teal-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            onClick={() => setIsMenuOpen(false)}
                                            aria-label="MINT"
                                            title="MINT"
                                            className="inline-flex items-center"
                                        >
                                            <svg
                                                className="w-8 text-teal-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeMiterlimit="10"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <rect x="3" y="1" width="7" height="12"/>
                                                <rect x="3" y="17" width="7" height="6"/>
                                                <rect x="14" y="1" width="7" height="6"/>
                                                <rect x="14" y="11" width="7" height="12"/>
                                            </svg>
                                            <span
                                                className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                MINT
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Закрыть меню"
                                            title="Закрыть меню"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        {authValue && (
                                            <>
                                                <li>
                                                    <Link
                                                        to="/activities"
                                                        onClick={() => setIsMenuOpen(false)}
                                                        aria-label="Задачи"
                                                        title="Задачи"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                                    >
                                                        Задачи
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/analytics"
                                                        onClick={() => setIsMenuOpen(false)}
                                                        aria-label="Аналитика"
                                                        title="Аналитика"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                                    >
                                                        Аналитика
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/profile"
                                                        onClick={() => setIsMenuOpen(false)}
                                                        aria-label="Профиль"
                                                        title="Профиль"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                                    >
                                                        Профиль
                                                    </Link>
                                                </li>
                                            </>
                                        )}
                                        {!authValue && (
                                            <ul className="flex items-center hidden space-x-8 lg:flex">
                                                <li>
                                                    <Link
                                                        to="/login"
                                                        aria-label="Вход в систему"
                                                        title="Вход в систему"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400"
                                                    >
                                                        Вход в систему
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/register"
                                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                                                        aria-label="Регистрация"
                                                        title="Регистрация"
                                                    >
                                                        Регистрация
                                                    </Link>
                                                </li>
                                            </ul>
                                        )}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}