export const Footer = () => {
    return (
        <div className="relative mt-16 bg-deep-purple-accent-400">
            <svg
                className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
            >
                <path
                    fill="currentColor"
                    d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                />
            </svg>
            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                    <div className="md:max-w-md lg:col-span-2">
                        <a
                            href="/"
                            aria-label="Домой"
                            title="MINT"
                            className="inline-flex items-center"
                        >
                            <svg
                                className="w-8 text-teal-accent-400"
                                viewBox="0 0 24 24"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                stroke="currentColor"
                                fill="none"
                            >
                                <rect x="3" y="1" width="7" height="12" />
                                <rect x="3" y="17" width="7" height="6" />
                                <rect x="14" y="1" width="7" height="6" />
                                <rect x="14" y="11" width="7" height="12" />
                            </svg>
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                                MINT
                            </span>
                        </a>
                        <div className="mt-4 lg:max-w-sm">
                            <p className="text-sm text-deep-purple-50">
                                Mint Is Not a Title - web-платформа для отслеживания и управления рабочими задачами
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-2 gap-5 row-gap-4 lg:col-span-4 md:grid-cols-2">
                        <div className="mt-4 lg:max-w-sm">
                            <p className="text-sm text-deep-purple-50">
                                Приложение разработано с использованием{' '}
                                <a href="https://spring.io/" className="inline-block text-teal-accent-400">
                                    Spring Framework
                                </a>
                                {' '}и{' '}
                                <a href="https://reactjs.org/" className="inline-block text-teal-accent-400">
                                    React
                                </a>
                                {' '}в рамках дипломного проекта
                            </p>
                        </div>
                        <div className="mt-4 lg:max-w-sm">
                            <p className="text-sm text-deep-purple-50">
                                Дизайн создан при поддержке{' '}
                                <a href="https://tailwindcss.com/" className="inline-block text-teal-accent-400">
                                    Tailwind CSS
                                </a>
                                {' '}
                                <a href="https://kitwind.io/products/kometa" className="inline-block text-teal-accent-400">
                                    Kometa UI Kit
                                </a>
                                {' '}и{' '}
                                <a href="https://flowbite.com/" className="inline-block text-teal-accent-400">
                                    Flowbite
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
                    <p className="text-sm text-gray-100">
                        2022 MINT Project. Все права защищены.
                    </p>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        <a
                            href="https://github.com/eightbyte81"
                            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6" >
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};