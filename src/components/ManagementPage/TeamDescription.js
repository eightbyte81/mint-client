import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import {UserToTeamFormModal} from "./UserToTeamFormModal";
import defaultAvatar from "../../assets/defaultAvatar.png";
import {deleteTeam, removeUserFromTeam} from "../../api/service/teamService";
import {DangerAlert} from "../alerts/DangerAlert";
import {Spinner} from "../spinner/Spinner";

export const TeamDescription = ({team, users}) => {
    const {roleArray} = useContext(AuthContext)
    const [showSpinner, setShowSpinner] = useState(false)
    const [showDanger, setShowDanger] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const [nonTeamUsers, setNonTeamUsers] = useState(new Set())
    const [userToTeamFormModal, setUserToTeamFormModal] = useState(false)

    useEffect(() => {
        const nonTeamUsersSet = new Set()

        users.forEach(user => {
            if (user["team"] === undefined || user["team"] === null || user["team"]["id"] !== team["id"]) nonTeamUsersSet.add(user)
        })
        
        setNonTeamUsers(nonTeamUsersSet)
    }, [users, team])

    const handleUserToTeamFormModalButtons = value => {
        setUserToTeamFormModal(value)
    }

    const handleTeamDelete = async () => {
        setShowSpinner(true)

        const [, errorMessage] = await deleteTeam(team["id"])

        if (errorMessage) {
            setErrorMsg(errorMessage)
            setShowSpinner(false)
            setShowDanger(true)

            return
        }

        setShowSpinner(false)
        window.location.reload()
    }

    const handleUserFromTeamDelete = async (userId) => {
        setShowSpinner(true)

        const [, errorMessage] = await removeUserFromTeam({"userId": userId, "teamId": team["id"]})

        if (errorMessage) {
            setErrorMsg(errorMessage)
            setShowSpinner(false)
            setShowDanger(true)

            return
        }

        setShowSpinner(false)
        window.location.reload()
    }

    return (
        <div className="flex justify-center">
            <div className="block rounded-lg shadow-lg bg-white w-full text-center">
                <div className="py-3 px-6 border-b border-gray-300">
                    {team["name"]}
                    <div className="text-gray-400">
                        {team["description"]}
                    </div>
                </div>
                <div className="px-5 text-left">
                    <div className="m-3 font-medium text-gray-800">
                        <div className="text-gray-400">
                            ???????????? ????????????????????
                            <button
                                className="ml-3 border-2 rounded-md hover:border-deep-purple-accent-700"
                                onClick={_ => handleUserToTeamFormModalButtons(true)}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul className="overflow-y-auto max-h-56 text-left">
                                {team["members"].map(member => (
                                    <li
                                        key={member["id"]}
                                        className="flex justify-between items-center my-2 px-2 border rounded-md">
                                        <div className="flex justify-start items-center">
                                            <img
                                                className="rounded-full bg-white ml-3 w-10 h-10"
                                                src={member["photoUrl"] ? member["photoUrl"] : defaultAvatar}
                                                alt="" />
                                            <div className="m-2 ml-3">
                                                {member["name"]} {member["lastname"]}
                                                <div className="text-gray-400">
                                                    {member["roles"].some(role => role.name === "ADMIN") ? "??????????????????????????" :
                                                        member["roles"].some(role => role.name === "LEAD") ? "?????????? ??????????????" : "????????????????"}
                                                </div>
                                            </div>
                                        </div>
                                            <button
                                                className="flex flex-row-reverse items-center"
                                                onClick={_ => handleUserFromTeamDelete(member["id"])}
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                            {showDanger && (
                                                <DangerAlert dangerMessage={errorMsg} />
                                            )}
                                            {showSpinner && (
                                                <Spinner />
                                            )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    {roleArray.includes("ROLE_ADMIN") && (
                        <>
                            <button
                                type="button"
                                onClick={handleTeamDelete}
                                className="mx-2 inline-block px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                                ?????????????? ??????????????
                            </button>
                            {showDanger && (
                                <DangerAlert dangerMessage={errorMsg} />
                            )}
                            {showSpinner && (
                                <Spinner />
                            )}
                        </>
                    )}
                </div>
            </div>
            {userToTeamFormModal && (
                <UserToTeamFormModal usersData={nonTeamUsers} team={team} handleModalButtons={handleUserToTeamFormModalButtons} />
            )}
        </div>
    )
}