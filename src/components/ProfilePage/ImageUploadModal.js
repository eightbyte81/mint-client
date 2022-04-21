import {useRef, useState} from "react";
import {DangerAlert} from "../alerts/DangerAlert";
import {updateUser} from "../../api/service/userService";
import {Spinner} from "../spinner/Spinner";

export const ImageUploadModal = ({handleModalButtons, userData}) => {
    const imageUrl = useRef('')
    const [showDanger, setShowDanger] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const handleImageUpload = async () => {
        if (showDanger) setShowDanger(false)
        setShowSpinner(true)

        if (imageUrl.current
            .match("(http(|s):\\/\\/)([^\\s([\"<,>/]*)(\\/)[^\\s[\",><]*(.png|.jpg|.jpeg)(\\?[^\\s[\",><]*)?") === null) {
            setErrorMsg({
                "name": "InvalidImgUrl",
                "message": "Неверная ссылка на изображение"
            })
            setShowDanger(true)
            setShowSpinner(false)
            return
        }

        userData["photoUrl"] = imageUrl.current
        delete userData["password"]

        const [, errorMessage] = await updateUser(userData)
        if (errorMessage) {
            setErrorMsg(errorMessage)
            setShowSpinner(false)
            setShowDanger(true)

            return
        }

        setShowSpinner(false)
        handleModalButtons(false)
    }

    return (
        <div id="imageUploadModal" tabIndex="-1" aria-hidden="true"
             className="justify-center items-center flex overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <div className="relative rounded-lg shadow bg-deep-purple-accent-400">
                    <div className="flex justify-between items-start p-5 rounded-t">
                        <h3 className="text-xl font-semibold text-deep-purple-50 lg:text-2xl">
                            Загрузка изображения
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
                    <div className="p-6 space-y-6 text-left">
                        <input
                            onChange={e => imageUrl.current = e.target.value}
                            className="text-base leading-relaxed rounded-md focus:outline-none text-gray-700 p-2 w-full"
                            placeholder="Введите URL изображения"
                        />
                    </div>
                    {showSpinner && (
                        <div className="px-3">
                            <Spinner />
                        </div>
                    )}
                    {showDanger && (
                        <div className="px-3">
                            <DangerAlert dangerMessage={errorMsg} />
                        </div>
                    )}
                    <div
                        className="flex gap-2 flex-row-reverse p-6 rounded-b">
                        <button
                            onClick={_ => handleImageUpload()}
                            type="button"
                            className="text-white bg-teal-accent-700 hover:bg-teal-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Загрузить
                        </button>
                        <button
                            onClick={_ => handleModalButtons(false)}
                            type="button"
                                className="text-gray-800 bg-white hover:bg-gray-100 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                        >
                            Отмена
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}