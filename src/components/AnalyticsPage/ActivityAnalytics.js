import {useContext, useEffect, useState} from "react";
import {DangerAlert} from "../alerts/DangerAlert";
import {Spinner} from "../spinner/Spinner";
import {AuthContext} from "../../context/AuthContext";
import {fetchTeamActivities} from "../../api/fetch/fetchTeamActivities";

export const ActivityAnalytics = ({teamMembers}) => {
    const [activitiesData, setActivitiesData] = useState(new Set())
    const {username} = useContext(AuthContext)
    const [showDanger, setShowDanger] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        setShowSpinner(true)

        if (teamMembers === undefined) return

        fetchTeamActivities(teamMembers).then(res => {
            if (res["danger"]) {
                setErrorMsg(res["error"])
                setShowDanger(res["danger"])

                return
            }

            setActivitiesData(res["data"])
        })

        setShowSpinner(false)
    }, [teamMembers])

    const countUserActivities = (approved = false, monthly = false) => {
        if (activitiesData.size === 0) return 0
        const userActivities = new Set()

        activitiesData.forEach(activity => {
            if (activity["user"]["username"] === username) userActivities.add(activity)
        })

        if (approved) {
            let approvedCountValue = 0
            const monthAgoValue = new Date()
            monthAgoValue.setMonth(monthAgoValue.getMonth() - 1)

            userActivities.forEach(activity => {
                if (activity["closedAt"] !== null) {
                    if (monthly) {
                        const closedAt = new Date(activity["closedAt"])
                        if (closedAt > monthAgoValue) approvedCountValue++
                    } else {
                        approvedCountValue++
                    }
                }
            })

            return approvedCountValue
        }

        return userActivities.size
    }

    const countTeamApprovedActivities = (monthly = false) => {
        if (activitiesData.size === 0) return 0
        let approvedCountValue = 0
        const monthAgoValue = new Date()
        monthAgoValue.setMonth(monthAgoValue.getMonth() - 1)

        activitiesData.forEach(activity => {
            if (activity["closedAt"] !== null) {
                if (monthly) {
                    const closedAt = new Date(activity["closedAt"])
                    if (closedAt > monthAgoValue) approvedCountValue++
                } else {
                    approvedCountValue++
                }
            }
        })

        return approvedCountValue
    }

    return (
        <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
            {showDanger && (
                <DangerAlert dangerMessage={errorMsg} />
            )}
            {showSpinner && (
                <Spinner />
            )}
            {(!showSpinner && !showDanger) && (
                <>
                    <div className="flex flex-col justify-between p-10">
                        <div className="p-5">
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                ?????????? ???????????????????? ??????????
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                {countUserActivities()}
                            </p>
                        </div>
                        <div className="p-5">
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                ?????????????????????? ????????????
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                {countUserActivities(true)}
                            </p>
                        </div>
                        <div className="p-5">
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                ?????????????????????? ????????????<br />???? ??????????
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                {countUserActivities(true, true)}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-10">
                        <div className="p-5">
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                ???????????????????? ??????????<br />?? ??????????????
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                {activitiesData.size}
                            </p>
                        </div>
                        <div className="p-5">
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                ?????????????????????? ????????????<br />?? ??????????????
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                {countTeamApprovedActivities()}
                            </p>
                        </div>
                        <div className="p-5">
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                ?????????????????????? ????????????<br />?? ?????????????? ???? ??????????
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                {countTeamApprovedActivities(true)}
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}