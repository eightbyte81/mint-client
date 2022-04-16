import defaultAvatar from "../../assets/defaultAvatar.png";

export const TeamMembers = ({teamMembers}) => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div>
                <div>
                    <p className="mb-5 text-lg font-bold">Участники команды</p>
                </div>
            </div>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {teamMembers && (
                    <>
                        {teamMembers.map((member, id) => (
                            <div key={id} className="p-8 bg-white border rounded shadow-sm">
                                <p
                                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                    {member["roles"].includes("ROLE_ADMIN") ? "Администратор" :
                                        member["roles"].includes("ROLE_LEAD") ? "Глава команды" : "Участник"}
                                </p>
                                <div className="mt-3 flex inline-flex items-center">
                                    <a href="/" aria-label="Author" title="Author" className="mr-3">
                                        <img
                                            src={member["photoUrl"] ? member["photoUrl"] : defaultAvatar}
                                            alt="avatar"
                                            className="object-cover w-10 h-10 rounded-full shadow-sm"
                                        />
                                    </a>
                                    <div>
                                        <span
                                            className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                            {member["name"]} {member["lastname"]}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}