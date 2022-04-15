export const NotFoundPage = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex m-auto items-center">
                <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M274.01 41.3599C275.188 40.0987 277.126 40.2021 278.332 41.4358C448.536 215.505 361.093 402.633 229.5 369.5C212.859 365.31 203 387.589 175.061 365.384C41.9712 259.61 236.581 81.4538 274.01 41.3599Z" fill="#64FEDA"/>
                    <path d="M247.816 454.5C235.246 436.048 231.735 393.604 229.5 369.5M275.01 135.688C254.39 217.059 222.489 293.892 229.5 369.5M229.5 369.5C361.093 402.633 448.536 215.505 278.332 41.4358C277.126 40.2021 275.188 40.0987 274.01 41.3599C236.581 81.4538 41.9712 259.61 175.061 365.384C203 387.589 212.859 365.31 229.5 369.5Z" stroke="#01BFA5" strokeWidth="14" strokeLinecap="round"/>
                </svg>
                <div className="pl-20 max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    Страница не найдена
                </div>
            </div>
        </div>
    )
}