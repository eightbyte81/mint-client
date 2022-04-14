export const ActivityDescription = () => {
    return (
        <div className="flex justify-center">
            <div className="block rounded-lg shadow-lg bg-white w-full text-center">
                <div className="py-3 px-6 border-b border-gray-300">
                    Название задачи
                </div>
                <div className="p-6">
                    <p className="text-gray-700 text-base mb-4">
                        Описание задачи
                    </p>
                    <button type="button"
                            className="inline-block px-6 py-2.5 bg-deep-purple-accent-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-deep-purple-accent-700 hover:shadow-lg focus:bg-deep-purple-accent-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-deep-purple-accent-800 active:shadow-lg transition duration-150 ease-in-out">
                        Отметить как выполненное
                    </button>
                    {/*<button type="button"*/}
                    {/*        className="inline-block px-6 py-2.5 bg-teal-accent-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-accent-700 hover:shadow-lg focus:bg-teal-accent-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-accent-800 active:shadow-lg transition duration-150 ease-in-out">*/}
                    {/*    Отметить как подтвержденное*/}
                    {/*</button>*/}
                    <div>
                        <div className="text-left text-base text-gray-800 m-3">
                            Пользователи:
                        </div>
                        <ul className="flex flex-col max-w-fit">
                            <li className="inline-flex pb-1.5">
                                <button className="inline-flex border-2 border-white p-1 hover:border-gray-50 active:border-gray-50">
                                    <img className="rounded-full w-10 h-10" src="https://i1.sndcdn.com/artworks-000550908456-f1jqua-t500x500.jpg" alt="avatar" />
                                    <div className="m-2 ml-3">
                                        Валерий Жмышенко
                                    </div>
                                </button>
                            </li>
                            <li className="inline-flex">
                                <button className="inline-flex border-2 border-white p-1 hover:border-gray-50 active:border-gray-50">
                                    <img className="rounded-full w-10 h-10" src="https://i1.sndcdn.com/artworks-000550908456-f1jqua-t500x500.jpg" alt="avatar" />
                                    <div className="m-2 ml-3">
                                        Абобиат Бебров
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    2 days ago
                </div>
            </div>
        </div>
    )
}