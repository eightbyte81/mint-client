import {useContext, useEffect, useState} from "react";
import {LogoutModal} from "./LogoutModal";
import {ImageUploadModal} from "./ImageUploadModal";
import {AuthContext} from "../../context/AuthContext";
import {getUserByUsername} from "../../api/userService";
import {DangerAlert} from "../alerts/DangerAlert";
import {Spinner} from "../spinner/Spinner";
import defaultAvatar from "../../assets/defaultAvatar.png"
import {ChangeUserData} from "./ChangeUserData";
import {ChangeUserPassword} from "./ChangeUserPassword";

export const ProfilePage = () => {
    const {username, roleArray} = useContext(AuthContext)
    const [userData, setUserData] = useState({})
    const [logoutModal, setLogoutModal] = useState(false)
    const [imageUploadModal, setImageUploadModal] = useState(false)
    const [showDanger, setShowDanger] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        async function getUserData() {
            setShowSpinner(true)
            const [returnData, errorMessage] = await getUserByUsername(username)

            if (errorMessage) {
                setErrorMsg(errorMessage)
                setShowDanger(true)
            } else if (!returnData) {
                setErrorMsg({"name": "UserNotFound", "message": `Пользователь ${username} не найден`})
                setShowDanger(true)
            }

            setUserData(returnData)
            setShowSpinner(false)
        }

        getUserData().then(_ => {})
    }, [username])

    let profilePageClasses = "grid grid-cols-2"
    if (logoutModal || imageUploadModal) profilePageClasses += " opacity-25"

    const handleLogoutModalButtons = (value) => {
        setLogoutModal(value)
    }

    const handleImageUploadModalButtons = (value) => {
        setImageUploadModal(value)
    }

    return (
        <div className="px-4 py-16 items-end mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {showDanger && (
                <DangerAlert dangerMessage={errorMsg} />
            )}
            {showSpinner && (
                <Spinner />
            )}
            {(!showSpinner && !showDanger) && (
                <div className={profilePageClasses}>
                    <div className="grid grid-cols-1 gap-4 max-w-screen-sm items-center text-left space-x-4 mb-5">
                        <div className="space-y-1 font-medium text-gray-800">
                            <button onClick={_ => setImageUploadModal(true)}>
                                <img className="rounded w-56 h-56" src={userData["photoUrl"] ? userData["photoUrl"] : defaultAvatar}
                                     alt="avatar"/>
                            </button>

                        </div>
                        <div className="space-y-1 font-medium text-gray-800">
                            <div className="text-gray-400">
                                {roleArray.includes("ROLE_ADMIN") ? "Администратор" :
                                    roleArray.includes("ROLE_LEAD") ? "Глава команды" : "Пользователь"}
                            </div>
                            <div className="text-lg font-bold text-gray-800">{userData["name"]} {userData["lastname"]}</div>
                        </div>
                        <div className="mt-3 space-y-1 font-medium text-gray-800">
                            <div className="text-gray-400">Имя пользователя</div>
                            <div className="text-lg">{userData["username"]}</div>
                        </div>
                        <div className="space-y-1 font-medium text-gray-800">
                            <div className="text-gray-400">Почта</div>
                            <div className="text-lg">{userData["email"]}</div>
                        </div>
                        <div className="pt-3">
                            <button type="button"
                                    onClick={_ => setLogoutModal(true)}
                                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >
                                Выйти из системы
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <ChangeUserData userData={userData} />
                        <ChangeUserPassword />
                    </div>
                </div>
            )}
            {logoutModal && (
                <LogoutModal handleModalButtons={handleLogoutModalButtons} />
            )}
            {imageUploadModal && (
                <ImageUploadModal handleModalButtons={handleImageUploadModalButtons} userData={userData} />
            )}
        </div>
    )
}