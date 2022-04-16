export const ActivityAnalytics = ({teamMembers}) => {
    // TODO: получение данных о задачах, подсчет для вывода
    return (
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
    )
}