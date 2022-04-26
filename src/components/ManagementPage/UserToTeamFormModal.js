import {DangerAlert} from "../alerts/DangerAlert";
import {Spinner} from "../spinner/Spinner";
import {useEffect, useState} from "react";
import {addUserToTeam} from "../../api/service/teamService";
import defaultAvatar from "../../assets/defaultAvatar.png";

export const UserToTeamFormModal = ({usersData, team, handleModalButtons}) => {
    const [users, setUsers] = useState([])
    const [showDanger, setShowDanger] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        const usersWithCheckbox = [...usersData].map(user => Object.assign(user, {"checked": false}))

        setUsers(usersWithCheckbox)
    }, [usersData])

    const handleSearch = e => {
        const filteredUsers = [...usersData].filter(user =>
            `${user["name"]} ${user["lastname"]}`.toLowerCase().includes(e.target.value.toLowerCase())
        )

        setUsers(filteredUsers)
    }

    const handleCheck = (e, id) => {
        const checkedUsers = users.map(user => {
            if (e.target.checked) {
                return user.id === id ? {...user, "checked": e.target.checked} : {...user, "checked": false}
            } else {
                return user.id === id ? {...user, "checked": e.target.checked} : user
            }
        })

        setUsers(checkedUsers)
    }

    const handleSubmit = async (e)  => {
        e.preventDefault()
        if (showDanger) setShowDanger(false)
        setShowSpinner(true)

        let [checkedUser] = users.filter(user => user["checked"] === true)

        if (checkedUser === undefined) {
            setErrorMsg({"name": "CheckedUserError", "message": "Не выбран пользователь, исполняющий задачу"})
            setShowSpinner(false)
            setShowDanger(true)

            return
        }

        await addUserToTeam({"userId": checkedUser["id"], "teamId": team["id"]})

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
                            Добавление пользователя в команду
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
                    <div className="pt-3 px-6 text-left">
                        <input
                            onChange={handleSearch}
                            className="text-base leading-relaxed rounded-md focus:outline-none text-gray-700 p-2 w-full"
                            placeholder="Фамилия Имя"
                        />
                        <ul className="overflow-y-auto max-h-56 pt-3 px-8 space-y-2 text-left">
                            {users.length !== 0 && users.map(member => (
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
                            {users.length === 0 && (
                                <li
                                    className="flex justify-start text-white my-2 p-2 border rounded-md">
                                    <div className="m-2 ml-3">
                                        Пользователь не найден
                                    </div>
                                </li>
                            )}
                        </ul>
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