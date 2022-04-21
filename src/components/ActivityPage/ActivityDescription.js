import React, {useState} from "react";
import {updateActivityStatus} from "../../api/service/activityService";
import {DangerAlert} from "../alerts/DangerAlert";
import {Spinner} from "../spinner/Spinner";

export const ActivityDescription = ({activity}) => {
    const [showDanger, setShowDanger] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const changeStatus = async (status) => {
        if (showDanger) setShowDanger(false)
        setShowSpinner(true)

        const updateActivityStatusForm = {
            "activityId": activity["id"],
            "status": status
        }

        const [, errorMessage] = await updateActivityStatus(updateActivityStatusForm)

        if (errorMessage) {
            setErrorMsg(errorMessage)
            setShowDanger(true)
        }

        setShowSpinner(false)
        window.location.reload()
    }

    const getActivityLifetime = (createdAt) => {
        const lifetime = Date.now() - new Date(createdAt)

        if ((lifetime / 60000) < 60) return `${Math.floor(lifetime / 60000)} минут назад`
        if ((lifetime / 3600000) < 24) return `${Math.floor(lifetime / 3600000)} часов назад`

        return `${Math.floor(lifetime / 86400000)} дней назад`
    }

    return (
        <div className="flex justify-center">
            <div className="block rounded-lg shadow-lg bg-white w-full text-center">
                <div className="py-3 px-6 border-b border-gray-300">
                    {activity["name"]}
                </div>
                <div className="p-6">
                    <p className="text-gray-700 text-base mb-4">
                        {activity["description"]}
                    </p>
                    {activity["status"] === "CREATED" && (
                        <button type="button"
                                onClick={_ => changeStatus("COMPLETED")}
                                className="inline-block px-6 py-2.5 bg-deep-purple-accent-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-deep-purple-accent-700 hover:shadow-lg focus:bg-deep-purple-accent-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-deep-purple-accent-800 active:shadow-lg transition duration-150 ease-in-out">
                            Отметить как выполненное
                        </button>
                    )}
                    {activity["status"] === "COMPLETED" && (
                        <button type="button"
                                onClick={_ => changeStatus("APPROVED")}
                            className="inline-block px-6 py-2.5 bg-teal-accent-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-accent-700 hover:shadow-lg focus:bg-teal-accent-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-accent-800 active:shadow-lg transition duration-150 ease-in-out">
                            Отметить как подтвержденное
                        </button>
                    )}
                    {activity["status"] === "APPROVED" && (
                        <button type="button"
                                disabled
                                className="inline-block px-6 py-2.5 bg-teal-accent-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg focus:bg-teal-accent-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-accent-800 active:shadow-lg transition duration-150 ease-in-out">
                            Подтверждено
                        </button>
                    )}
                    {showDanger && (
                        <DangerAlert dangerMessage={errorMsg} />
                    )}
                    {showSpinner && (
                        <Spinner />
                    )}
                    <div>
                        <div className="text-left text-base text-gray-800 m-3">
                            Ответственный:
                        </div>
                        {activity["user"] !== null && (
                            <ul className="flex flex-col max-w-fit">
                                <li className="inline-flex pb-1.5">
                                    <button className="inline-flex border-2 border-white p-1 hover:border-gray-50 active:border-gray-50">
                                        <img className="rounded-full w-10 h-10" src="https://i1.sndcdn.com/artworks-000550908456-f1jqua-t500x500.jpg" alt="avatar" />
                                        <div className="m-2 ml-3">
                                            {activity["user"]["name"]} {activity["user"]["lastname"]}
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    {getActivityLifetime(activity["createdAt"])}
                </div>
            </div>
        </div>
    )
}