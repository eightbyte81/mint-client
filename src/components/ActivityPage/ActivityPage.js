import {ActivitiesList} from "./ActivitiesList";
import {ActivityDescription} from "./ActivityDescription";
import {useState} from "react";
import {ActivityFormModal} from "./ActivityFormModal";

export const ActivityPage = () => {
    const [activityFormModal, setActivityFormModal] = useState(false)

    let activityPageClasses = "grid grid-cols-2 gap-4"
    if (activityFormModal) activityPageClasses += " opacity-25"

    const handleActivityFormModalButtons = (value) => {
        setActivityFormModal(value)
    }

    return (
        <div className="px-4 py-16 items-end mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className={activityPageClasses}>
                <div>
                    <div className="text-left text-lg font-bold text-gray-800 ml-3 mb-3">
                        Название команды
                        <button className="ml-3 border-2 rounded-md hover:border-deep-purple-accent-700"
                                onClick={_ => handleActivityFormModalButtons(true)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                    </div>

                    <ActivitiesList />
                </div>

                <ActivityDescription />
            </div>
            {activityFormModal && (
                <ActivityFormModal handleModalButtons={handleActivityFormModalButtons} />
            )}
        </div>
    )
}