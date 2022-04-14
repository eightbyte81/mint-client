export const ActivityPage = () => {
    return (
        <div className="px-4 py-16 items-end mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="text-left text-lg font-bold text-gray-800 ml-3 mb-3">Название команды</div>
                    <ul className="flex flex-col items-center lg:flex">
                        <div className="flex justify-between items-center p-3 w-full font-medium text-left border-2 border-b-0 border-gray-200">
                            <li>Activity</li>
                            <svg className="w-6 h-6 rotate-0 shrink-0" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <div className="flex justify-between items-center p-3 w-full font-medium text-left border-2 border-b-0 border-gray-200">
                            <div className="inline-flex">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                <li className="ml-2">Child Activity</li>
                            </div>
                            <div>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-3 w-full font-medium text-left border-2 border-b-2 border-gray-200">
                            <li>Activity</li>
                            <div>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </ul>
                </div>
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
            </div>
        </div>
    )
}