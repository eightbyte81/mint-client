import {ActivitiesList} from "./ActivitiesList";
import {ActivityDescription} from "./ActivityDescription";
import {useContext, useEffect, useState} from "react";
import {ActivityFormModal} from "./ActivityFormModal";
import {DangerAlert} from "../alerts/DangerAlert";
import {Spinner} from "../spinner/Spinner";
import {getUserByUsername} from "../../api/userService";
import {AuthContext} from "../../context/AuthContext";
import {getAllActivitiesByUser} from "../../api/activityService";

export const ActivityPage = () => {
    const {username, roleArray} = useContext(AuthContext)
    const [userData, setUserData] = useState({})
    const [activitiesData, setActivitiesData] = useState(new Set())
    const [activityFormModal, setActivityFormModal] = useState(false)
    const [activityDescriptionData, setActivityDescriptionData] = useState({"show": false, "activity": null})
    const [showDanger, setShowDanger] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    let activityPageClasses = "grid grid-cols-2 gap-4"
    if (activityFormModal) activityPageClasses += " opacity-25"

    useEffect(() => {
        async function getActivitiesData() {
            setShowSpinner(true)

            const [userData, errorUserMessage] = await getUserByUsername(username)

            if (errorUserMessage) {
                setErrorMsg(errorUserMessage)
                setShowDanger(true)
                setShowSpinner(false)
                return
            } else if (!userData) {
                setErrorMsg({"name": "UserNotFound", "message": `Пользователь ${username} не найден`})
                setShowDanger(true)
                setShowSpinner(false)
                return
            }

            setUserData(userData)

            const [activities, errorActivitiesMessage] =  await getAllActivitiesByUser(userData["id"])

            if (errorActivitiesMessage) {
                setErrorMsg(errorActivitiesMessage)
                setShowDanger(true)
                setShowSpinner(false)
                return
            } else if (!activities) {
                setErrorMsg({"name": "ActivitiesNotFound", "message": `Задачи пользователя ${username} не найдены`})
                setShowDanger(true)
                setShowSpinner(false)
                return
            }

            setActivitiesData(new Set(activities))

            setShowSpinner(false)
        }

        getActivitiesData().then(_ => {})
    }, [username])

    const handleActivityFormModalButtons = (value) => {
        setActivityFormModal(value)
    }

    const handleActivityDescriptionOpen = (show, activity) => {
        setActivityDescriptionData({"show": show, "activity": activity})
    }

    return (
        <div className="px-4 py-16 items-end mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {showDanger && (
                <DangerAlert dangerMessage={errorMsg} />
            )}
            {showSpinner && (
                <Spinner />
            )}
            {(!showSpinner && !showDanger && activitiesData.size !== 0 && userData !== {}) && (
                <>
                    <div className={activityPageClasses}>
                        <div>
                            <div className="text-left text-lg font-bold text-gray-800 ml-3 mb-3">
                                {userData["team"]["name"]}
                                {(roleArray.includes("ROLE_LEAD") || roleArray.includes("ROLE_ADMIN")) && (
                                    <button className="ml-3 border-2 rounded-md hover:border-deep-purple-accent-700"
                                            onClick={_ => handleActivityFormModalButtons(true)}
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                )}
                            </div>

                            <ActivitiesList activities={activitiesData} handleActivityDescriptionOpen={handleActivityDescriptionOpen} />
                        </div>
                        {activityDescriptionData["show"] && (
                            <ActivityDescription activity={activityDescriptionData["activity"]} />
                        )}
                    </div>
                    {activityFormModal && (
                        <ActivityFormModal handleModalButtons={handleActivityFormModalButtons} />
                    )}
                </>
            )}
        </div>
    )
}