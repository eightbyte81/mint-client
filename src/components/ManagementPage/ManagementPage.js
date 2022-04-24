import {useContext, useEffect, useState} from "react";
import {DangerAlert} from "../alerts/DangerAlert";
import {Spinner} from "../spinner/Spinner";
import {fetchAllUsers} from "../../api/fetch/fetchAllUsers";
import {fetchAllTeams} from "../../api/fetch/fetchAllTeams";
import {UserDescription} from "./UserDescription";
import {TeamDescription} from "./TeamDescription";
import {TeamFormModal} from "./TeamFormModal";
import {AuthContext} from "../../context/AuthContext";

export const ManagementPage = () => {
    const {roleArray} = useContext(AuthContext)

    const [usersData, setUsersData] = useState([])
    const [teamsData, setTeamsData] = useState([])
    const [showDanger, setShowDanger] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const [showUserDescription, setShowUserDescription] = useState({"show": false, user: null})
    const [showTeamDescription, setShowTeamDescription] = useState({"show": false, team: null})
    const [teamFormModal, setTeamFormModal] = useState(false)

    useEffect(() => {
        setShowSpinner(true)
        
        async function getUsersAndTeamsData() {
            const usersRes = await fetchAllUsers()

            if (usersRes["danger"]) {
                setErrorMsg(usersRes["error"])
                setShowDanger(usersRes["danger"])

                return
            }

            setUsersData(usersRes["data"])

            const teamsRes = await fetchAllTeams()

            if (teamsRes["danger"]) {
                setErrorMsg(teamsRes["error"])
                setShowDanger(teamsRes["danger"])

                return
            }

            setTeamsData(teamsRes["data"])
        }

        getUsersAndTeamsData().then(_ => {})
        
        setShowSpinner(false)
    }, [])

    const handleDescriptionOpen = (show, type, data) => {
        if (type === "user") setShowUserDescription({"show": show, user: data})
        if (type === "team") setShowTeamDescription({"show": show, team: data})
    }

    const handleTeamFormModalButtons = value => {
        setTeamFormModal(value)
    }

    return (
        <div className="px-4 py-16 items-end mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {showDanger && (
                <DangerAlert dangerMessage={errorMsg} />
            )}
            {showSpinner && (
                <Spinner />
            )}
            {(!showSpinner && !showDanger) && (
                <>
                    <div className="grid grid-cols-2 gap-20 pb-20">
                        <div className="max-w-full">
                            <div className="ml-6 text-left">
                                <p className="mb-2 text-lg font-bold">Список пользователей</p>
                            </div>
                            {usersData !== [] && (
                                <ul className="overflow-y-auto max-h-96 pt-3 px-8 space-y-2 text-left">
                                    {usersData.map(user => (
                                        <button
                                            key={user["id"]}
                                            onClick={_ => handleDescriptionOpen(true, "user", user)}
                                            className="flex justify-start my-2 p-2 w-full border rounded-md"
                                        >
                                            <img className="rounded-full bg-white ml-3 w-10 h-10" src={user["photoUrl"]} alt="" />
                                            <li className="m-2 ml-3">
                                                {user["name"]} {user["lastname"]}
                                            </li>
                                        </button>
                                    ))}
                                </ul>
                            )}
                        </div>
                        {showUserDescription["show"] && (
                            <UserDescription user={showUserDescription["user"]} />
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-20">
                        <div className="max-w-full">
                            <div className="ml-6 text-left">
                                <p className="mb-2 text-lg font-bold">
                                    Список команд
                                    {roleArray.includes("ROLE_ADMIN") && (
                                        <button className="ml-3 border-2 rounded-md hover:border-deep-purple-accent-700"
                                                onClick={_ => handleTeamFormModalButtons(true)}
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </button>
                                    )}
                                </p>
                            </div>
                            {teamsData !== [] && (
                                <ul className="overflow-y-auto max-h-96 pt-3 px-8 space-y-2 text-left">
                                    {teamsData.map(team => (
                                        <button
                                            key={team["id"]}
                                            onClick={_ => handleDescriptionOpen(true, "team", team)}
                                            className="flex justify-start my-2 p-2 w-full border rounded-md"
                                        >
                                            <li className="m-2 ml-3">
                                                {team["name"]}
                                            </li>
                                        </button>
                                    ))}
                                </ul>
                            )}
                        </div>
                        {showTeamDescription["show"] && (
                            <TeamDescription team={showTeamDescription["team"]} users={usersData} />
                        )}
                    </div>
                    {teamFormModal && (
                        <TeamFormModal handleModalButtons={handleTeamFormModalButtons} />
                    )}
                </>
            )}
        </div>
    )
}