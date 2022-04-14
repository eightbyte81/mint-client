import {ActivitiesList} from "./ActivitiesList";
import {ActivityDescription} from "./ActivityDescription";

export const ActivityPage = () => {
    return (
        <div className="px-4 py-16 items-end mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="text-left text-lg font-bold text-gray-800 ml-3 mb-3">Название команды</div>

                    <ActivitiesList />
                </div>

                <ActivityDescription />
            </div>
        </div>
    )
}