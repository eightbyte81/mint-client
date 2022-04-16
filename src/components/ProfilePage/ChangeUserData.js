import {useRef, useState} from "react";
import {updateUser} from "../../api/userService";
import {Spinner} from "../spinner/Spinner";

export const ChangeUserData = ({userData}) => {
    const name = useRef("")
    const lastname = useRef("")
    const [showSpinner, setShowSpinner] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setShowSpinner(true)

        userData["name"] = name.current
        userData["lastname"] = lastname.current
        delete userData["password"]

        await updateUser(userData) // TODO: handle error

        name.current = ""
        lastname.current = ""
        setShowSpinner(false)

        window.location.reload()
    }

    return (
        <div className="pb-5">
            <div className="font-light text-2xl">Изменить данные</div>
            <form className="mt-8 space-y-6 max-w-screen-sm">
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
                            onChange={e => name.current = e.target.value}
                            autoComplete="name"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                            placeholder="Имя"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastname" className="sr-only">
                            Фамилия
                        </label>
                        <input
                            id="lastname"
                            name="lastname"
                            type="text"
                            onChange={e => lastname.current = e.target.value}
                            autoComplete="lastname"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-b-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                            placeholder="Фамилия"
                        />
                    </div>
                </div>
                <div>
                    {!showSpinner && (
                        <button
                            type="submit"
                            onClick={e => handleSubmit(e)}
                            className="group relative max-w-xs flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-accent-400 hover:bg-teal-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            Сохранить изменения
                        </button>
                    )}
                    {showSpinner && (
                        <Spinner />
                    )}
                </div>
            </form>
        </div>
    )
}