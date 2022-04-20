import {useEffect, useState} from "react";
import {getAllActivitiesByUser} from "../../api/activityService";
import {DangerAlert} from "../alerts/DangerAlert";
import {Spinner} from "../spinner/Spinner";

export const ActivityAnalytics = ({teamMembers}) => {
    // TODO: получение данных о задачах, подсчет для вывода
    const [activitiesData, setActivitiesData] = useState([])
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

        teamMembers.forEach(member => {
            getActivitiesById(member.id).then(activities => {
                const storedActivities = activitiesData
                storedActivities.forEach(storedActivity => activities = activities.filter(activity => activity.id !== storedActivity.id))
                activities.forEach(activity => storedActivities.push(activity))

                setActivitiesData(storedActivities)
            })
        })

        setShowSpinner(false)
    }, [teamMembers])

    return (
        <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
            {showDanger && (
                <DangerAlert dangerMessage={errorMsg} />
            )}
            {showSpinner && (
                <Spinner />
            )}
            <div className="flex flex-col justify-between p-10">
                <div className="p-5">
                    <p className="text-lg font-semibold text-gray-800 sm:text-base">
                        Общее количество задач
                    </p>
                    <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                        {activitiesData.length}
                    </p>
                </div>
                <div className="p-5">
                    <p className="text-lg font-semibold text-gray-800 sm:text-base">
                        Завершенные задачи
                    </p>
                    <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                        52
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
                        86K
                    </p>
                </div>
                <div className="p-5">
                    <p className="text-lg font-semibold text-gray-800 sm:text-base">
                        Завершенные задачи<br />у команды
                    </p>
                    <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                        917 000
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
        </div>
    )
}