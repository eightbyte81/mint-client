export const ChangeUserPassword = () => {
    return (
        <div>
            <div className="font-light text-2xl">Изменить пароль</div>
            <form className="mt-8 space-y-6 max-w-screen-sm" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div className="pb-3">
                        <label htmlFor="password" className="sr-only">
                            Текущий пароль
                        </label>
                        <input
                            id="current-password"
                            name="password"
                            type="password"
                            // onChange={e => setPassword(e.target.value)}
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                            placeholder="Текущий пароль"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Новый пароль
                        </label>
                        <input
                            id="new-password"
                            name="password"
                            type="password"
                            // onChange={e => setPassword(e.target.value)}
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-accent-400 focus:border-teal-accent-400 focus:z-10 sm:text-sm"
                            placeholder="Новый пароль"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="group relative max-w-xs flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-accent-400 hover:bg-teal-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                        Сохранить изменения
                    </button>
                </div>
            </form>
        </div>
    )
}