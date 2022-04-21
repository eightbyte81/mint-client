import {TeamMembers} from "./TeamMembers";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import {DangerAlert} from "../alerts/DangerAlert";
import {Spinner} from "../spinner/Spinner";
import {ActivityAnalytics} from "./ActivityAnalytics";
import {fetchUser} from "../../api/fetch/fetchUser";
import {fetchTeam} from "../../api/fetch/fetchTeam";

export const AnalyticsPage = () => {
    const {username} = useContext(AuthContext)
    const [teamData, setTeamData] = useState({})
    const [showDanger, setShowDanger] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        setShowSpinner(true)
        async function getTeamData() {
            const userRes = await fetchUser(username)
            if (userRes["danger"]) {
                setErrorMsg(userRes["error"])
                setShowDanger(userRes["danger"])

                return
            }

            const teamRes = await fetchTeam(userRes["data"])
            if (teamRes["danger"]) {
                setErrorMsg(teamRes["error"])
                setShowDanger(teamRes["danger"])

                return
            }

            setTeamData(teamRes["data"])
        }

        getTeamData().then(_ => {})

        setShowSpinner(false)
    }, [username])

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {showDanger && (
                <DangerAlert dangerMessage={errorMsg} />
            )}
            {showSpinner && (
                <Spinner />
            )}
            {(!showSpinner && !showDanger && teamData !== {}) && (
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
                            <ActivityAnalytics teamMembers={teamData["members"]} />
                    </div>
                        <TeamMembers teamMembers={teamData["members"]} />
                </>
            )}
        </div>
    )
}