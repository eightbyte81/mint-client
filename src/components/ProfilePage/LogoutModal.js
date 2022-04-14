import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom";

export const LogoutModal = ({handleModalButtons}) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        handleModalButtons(false)

        const cookie = new Cookies()
        cookie.remove("authToken")
        sessionStorage.removeItem("authToken")
        navigate("/", {replace: true})
        window.location.reload()
    }

    return (
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
                                onClick={_ => handleModalButtons(false)}
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
                        <button onClick={_ => handleModalButtons(false)} type="button"
                                className="text-gray-800 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                        >
                            Отмена
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}