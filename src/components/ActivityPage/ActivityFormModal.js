import {useEffect, useRef, useState} from "react";
import {Spinner} from "../spinner/Spinner";
import {DangerAlert} from "../alerts/DangerAlert";
import {addActivityToUser, addChildActivity, createActivity} from "../../api/service/activityService";
import defaultAvatar from "../../assets/defaultAvatar.png";

export const ActivityFormModal = ({teamMembers, handleModalButtons, parentId = null}) => {
    const name = useRef("")
    const description = useRef("")
    const [showSpinner, setShowSpinner] = useState(false)
    const [showDanger, setShowDanger] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const [members, setMembers] = useState([])
    
    useEffect(() => {
        const membersWithCheckbox = teamMembers.map(member => Object.assign(member, {"checked": false}))
        
        setMembers(membersWithCheckbox)
    }, [teamMembers])

    const handleSearch = e => {
        const filteredMembers = teamMembers.filter(member =>
            `${member["name"]} ${member["lastname"]}`.toLowerCase().includes(e.target.value.toLowerCase())
        )

        setMembers(filteredMembers)
    }

    const handleCheck = (e, id) => {
        const checkedMembers = members.map(member => {
            if (e.target.checked) {
                return member.id === id ? {...member, "checked": e.target.checked} : {...member, "checked": false}
            } else {
                return member.id === id ? {...member, "checked": e.target.checked} : member
            }
        })

        setMembers(checkedMembers)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (showDanger) setShowDanger(false)
        setShowSpinner(true)

        const activity = {
            "name": name.current.trim(),
            "description": description.current.trim()
        }

        const [returnActivity, creationErrorMessage] = (parentId === null) ? await createActivity(activity) : await addChildActivity(activity, parentId)

        if (creationErrorMessage) {
            setErrorMsg(creationErrorMessage)
            setShowSpinner(false)
            setShowDanger(true)

            return
        }

        let [checkedUser] = members.filter(member => member["checked"] === true)

        if (checkedUser === undefined) {
            setErrorMsg({"name": "CheckedUserError", "message": "Не выбран пользователь, исполняющий задачу"})
            setShowSpinner(false)
            setShowDanger(true)

            return
        }

        const [, addUserErrorMessage] = await addActivityToUser(returnActivity["id"], checkedUser["id"])

        if (addUserErrorMessage) {
            setErrorMsg(addUserErrorMessage)
            setShowSpinner(false)
            setShowDanger(true)

            return
        }

        setShowSpinner(false)
        handleModalButtons(false)
        window.location.reload()
    }

    return (
        <div id="activityFormModal" tabIndex="-1" aria-hidden="true"
             className="justify-center items-center flex overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <form className="relative rounded-lg shadow bg-zinc-600" onSubmit={handleSubmit} method="POST">
                    <div className="flex justify-between items-start p-5 rounded-t">
                        <h3 className="text-xl font-semibold text-deep-purple-50 lg:text-2xl">
                            Добавление {parentId !== null ? "дочерней" : ""} задачи
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
                    <div>
                        <div className="pt-3 px-6 text-left">
                            <input
                                onChange={handleSearch}
                                className="text-base leading-relaxed rounded-md focus:outline-none text-gray-700 p-2 w-full"
                                placeholder="Фамилия Имя"
                            />
                            <ul className="overflow-y-auto max-h-56 pt-3 px-8 space-y-2 text-left">
                                {members.length !== 0 && members.map(member => (
                                    <li
                                        key={member["id"]}
                                        className="flex justify-start items-center text-white my-2 p-2 border rounded-md">
                                        <input
                                            type="checkbox"
                                            checked={member["checked"]}
                                            onChange={e => handleCheck(e, member["id"])}
                                            className="h-4 w-4 cursor-pointer text-indigo-600 focus:ring-teal-500 border-gray-300"
                                        />
                                        <img
                                            className="rounded-full bg-white ml-3 w-10 h-10"
                                            src={member["photoUrl"] ? member["photoUrl"] : defaultAvatar}
                                            alt=""
                                        />
                                        <div className="m-2 ml-3">
                                            {member["name"]} {member["lastname"]}
                                        </div>
                                    </li>
                                ))}
                                {members.length === 0 && (
                                    <li
                                        className="flex justify-start text-white my-2 p-2 border rounded-md">
                                        <div className="m-2 ml-3">
                                            Пользователь не найден
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
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