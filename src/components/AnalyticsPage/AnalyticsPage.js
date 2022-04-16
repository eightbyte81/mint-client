import {TeamMembers} from "./TeamMembers";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import {getUserByUsername} from "../../api/userService";
import {getTeamById} from "../../api/teamService";
import {DangerAlert} from "../alerts/DangerAlert";
import {Spinner} from "../spinner/Spinner";
import {ActivityAnalytics} from "./ActivityAnalytics";

export const AnalyticsPage = () => {
    const {username} = useContext(AuthContext)
    const [teamData, setTeamData] = useState({})
    const [showDanger, setShowDanger] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        async function getTeamData() {
            setShowSpinner(true)
            const [returnUserData, errorUserMessage] = await getUserByUsername(username)

            if (errorUserMessage) {
                setErrorMsg(errorUserMessage)
                setShowDanger(true)
                setShowSpinner(false)
                return
            } else if (!returnUserData) {
                setErrorMsg({"name": "UserNotFound", "message": `Пользователь ${username} не найден`})
                setShowDanger(true)
                setShowSpinner(false)
                return
            }

            const [returnTeamData, errorTeamMessage] = await getTeamById(returnUserData["team"]["id"])

            if (errorTeamMessage) {
                setErrorMsg(errorTeamMessage)
                setShowDanger(true)
                setShowSpinner(false)
                return
            } else if (!returnUserData) {
                setErrorMsg({"name": "TeamNotFound", "message": `Команда ${returnUserData["team"]["name"]} не найдена`})
                setShowDanger(true)
                setShowSpinner(false)
                return
            }

            setTeamData(returnTeamData)
            setShowSpinner(false)
        }

        getTeamData().then(_ => {})
    }, [username])

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {showDanger && (
                <DangerAlert dangerMessage={errorMsg} />
            )}
            {showSpinner && (
                <Spinner />
            )}
            {(!showSpinner && !showDanger) && (
                <>
                    <div className="grid gap-24 row-gap-8 lg:grid-cols-5">
                        <div className="grid gap-8 lg:col-span-2">
                            <div>
                                <p className="mb-2 text-lg font-bold">{teamData["name"]}</p>
                                <p className="text-gray-700">
                                    {teamData["description"]}
                                </p>
                            </div>
                        </div>
                        {teamData !== {} && (
                            <ActivityAnalytics teamMembers={teamData["members"]} />
                        )}
                    </div>
                    {teamData !== {} && (
                        <TeamMembers teamMembers={teamData["members"]} />
                    )}
                </>
            )}
        </div>
    )
}