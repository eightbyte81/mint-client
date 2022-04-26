import React from "react";

export const ActivitiesList = ({activities, handleActivityDescriptionOpen}) => {
    const getChildActivities = (activity, nesting) => {
        return activity["childActivities"].map(childActivity => (
            <React.Fragment key={childActivity.id} >
                <button
                    onClick={_ => handleActivityDescriptionOpen(true, childActivity)}
                    className="flex justify-between items-center p-3 w-full font-medium text-left border-2 border-gray-200">
                    <div className="inline-flex">
                        {[...Array(nesting)].map((_, i) => (
                            <svg key={i} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        ))}
                        <li className="ml-2">{childActivity["name"]}</li>
                    </div>
                    <div>
                        {childActivity["status"] === "CREATED" && (
                            <svg className="w-6 h-6" fill="none" stroke="teal" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                        {childActivity["status"] === "COMPLETED" && (
                            <svg className="w-6 h-6" fill="none" stroke="teal" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                        )}
                        {childActivity["status"] === "APPROVED" && (
                            <svg className="w-6 h-6" fill="none" stroke="teal" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        )}
                    </div>
                </button>
                {childActivity["childActivities"] !== [] && getChildActivities(childActivity, ++nesting)}
            </React.Fragment>
        ))
    }

    return (
        <ul className="flex flex-col items-center lg:flex">
            {[...activities].map(activity => {
                if (activity["parentActivity"] !== null) return (<div key={activity.id}></div>)
                return (
                    <React.Fragment key={activity.id}>
                        <button
                            onClick={_ => handleActivityDescriptionOpen(true, activity)}
                            className="flex justify-between items-center p-3 w-full font-medium text-left border-2 border-gray-200">
                            <li>{activity["name"]}</li>
                            <div>
                                {activity["status"] === "CREATED" && (
                                    <svg className="w-6 h-6" fill="none" stroke="teal" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                                {activity["status"] === "COMPLETED" && (
                                    <svg className="w-6 h-6" fill="none" stroke="teal" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                )}
                                {activity["status"] === "APPROVED" && (
                                    <svg className="w-6 h-6" fill="none" stroke="teal" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                )}
                            </div>
                        </button>
                        {getChildActivities(activity, 1)}
                    </React.Fragment>
                )
            })}
        </ul>
    )
}