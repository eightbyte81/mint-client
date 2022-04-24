import {DangerAlert} from "../alerts/DangerAlert";
import {Spinner} from "../spinner/Spinner";
import {useRef, useState} from "react";
import {addTeam} from "../../api/service/teamService";

export const TeamFormModal = ({handleModalButtons}) => {
    const name = useRef("")
    const description = useRef("")
    const [showDanger, setShowDanger] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const handleSubmit = async (e)  => {
        e.preventDefault()
        if (showDanger) setShowDanger(false)
        setShowSpinner(true)

        const team = {
            "name": name.current.trim(),
            "description": description.current.trim()
        }

        const [, creationErrorMessage] = await addTeam(team)

        if (creationErrorMessage) {
            setErrorMsg(creationErrorMessage)
            setShowSpinner(false)
            setShowDanger(true)

            return
        }

        setShowSpinner(false)
        handleModalButtons(false)
        window.location.reload()
    }

    return (
        <div id="teamFormModal" tabIndex="-1" aria-hidden="true"
             className="justify-center items-center flex overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <form className="relative rounded-lg shadow bg-zinc-600" onSubmit={handleSubmit} method="POST">
                    <div className="flex justify-between items-start p-5 rounded-t">
                        <h3 className="text-xl font-semibold text-deep-purple-50 lg:text-2xl">
                            Добавление команды
                        </h3>
                        <button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
                    <div className="pt-3 px-6 space-y-6 text-left">
                        <input
                            required
                            onChange={e => name.current = e.target.value}
                            className="text-base leading-relaxed rounded-md focus:outline-none text-gray-700 p-2 w-full"
                            placeholder="Название"
                        />
                    </div>
                    <div className="pt-3 px-6 space-y-6 text-left">
                        <input
                            required
                            onChange={e => description.current = e.target.value}
                            className="text-base leading-relaxed rounded-md focus:outline-none text-gray-700 p-2 w-full"
                            placeholder="Описание"
                        />
                    </div>
                    {showDanger && (
                        <div className="pt-2">
                            <DangerAlert dangerMessage={errorMsg} />
                        </div>
                    )}
                    <div
                        className="flex gap-2 flex-row-reverse p-6 rounded-b">
                        {!showSpinner && (
                            <button
                                type="submit"
                                className="text-white bg-teal-accent-700 hover:bg-teal-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Добавить
                            </button>
                        )}
                        {showSpinner && (
                            <Spinner />
                        )}
                        <button
                            onClick={_ => handleModalButtons(false)}
                            type="button"
                            className="text-gray-800 bg-white hover:bg-gray-100 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                        >
                            Отмена
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}