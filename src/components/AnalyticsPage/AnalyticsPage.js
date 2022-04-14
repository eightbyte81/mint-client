import {TeamMembers} from "./TeamMembers";

export const AnalyticsPage = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-24 row-gap-8 lg:grid-cols-5">
                <div className="grid gap-8 lg:col-span-2">
                    <div>
                        <p className="mb-2 text-lg font-bold">Название команды</p>
                        <p className="text-gray-700">
                            Аналитика поможет оценить продуктивность рабочего процесса
                        </p>
                    </div>
                </div>
                <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
                    <div className="flex flex-col justify-between p-10">
                        <div className="p-5">
                            <p className="text-lg font-semibold text-gray-800 sm:text-base">
                                Общее количество задач
                            </p>
                            <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                                $84 000 000
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
            </div>
            <TeamMembers />
        </div>
    )
}