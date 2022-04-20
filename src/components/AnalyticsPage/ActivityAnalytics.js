import {useEffect, useState} from "react";
import {getAllActivitiesByUser} from "../../api/activityService";
import {DangerAlert} from "../alerts/DangerAlert";
import {Spinner} from "../spinner/Spinner";

export const ActivityAnalytics = ({teamMembers}) => {
    // TODO: получение данных о задачах, подсчет для вывода
    const [activitiesData, setActivitiesData] = useState(new Set())
    const [showDanger, setShowDanger] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        setShowSpinner(true)

        if (teamMembers === undefined) return

        async function getActivitiesById(id) {
            const [returnActivities, errMsg] = await getAllActivitiesByUser(id)

            if (errMsg) {
                setErrorMsg(errMsg)
                setShowDanger(true)
                setShowSpinner(false)
                return
            } else if (!returnActivities) {
                setErrorMsg({"name": "ActivitiesNotFound", "message": `Задачи пользователя ${id} не найдены`})
                setShowDanger(true)
                setShowSpinner(false)
                return
            }

            return returnActivities
        }

        teamMembers.forEach(member => getActivitiesById(member.id).then(activities => {
            const fetchedActivities = new Set()

            activities.forEach(activity => {
                if (!fetchedActivities.has(activity)) fetchedActivities.add(activity)
            })

            setActivitiesData(fetchedActivities)
        }))

        setShowSpinner(false)
    }, [teamMembers])

    const countApprovedActivities = () => {
        if (activitiesData.size === 0) return null
        let approvedCountValue = 0

        activitiesData.forEach(activity => {
            if (activity["closedAt"] !== null) approvedCountValue++
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
            {(!showSpinner && !showDanger && activitiesData.size !== 0) && (
                <>
                    <div className="flex flex-col justify-between p-10">
                        <div className="p-5">
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                Общее количество задач
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                42
                            </p>
                        </div>
                        <div className="p-5">
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                Завершенные задачи
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                54
                            </p>
                        </div>
                        <div className="p-5">
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                Завершенные задачи<br />за месяц
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                186M
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-10">
                        <div className="p-5">
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                Количество задач<br />у команды
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                {activitiesData.size}
                            </p>
                        </div>
                        <div className="p-5">
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                Завершенные задачи<br />у команды
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                {countApprovedActivities()}
                            </p>
                        </div>
                        <div className="p-5">
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                Завершенные задачи<br />у команды за месяц
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                213K
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}