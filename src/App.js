import './App.css'

import React from "react"
import {Routes, Route} from "react-router-dom"

import {MainPage} from "./components/MainPage/MainPage"
import {AuthContext} from "./context/AuthContext"
import Cookies from "universal-cookie"
// import ApiTest from "./api/ApiTest";
import {ActivityPage} from "./components/ActivityPage/ActivityPage";
import {AnalyticsPage} from "./components/AnalyticsPage/AnalyticsPage";
import {ProfilePage} from "./components/ProfilePage/ProfilePage";
import {NotFoundPage} from "./components/NotFoundPage/NotFoundPage";
import {NavBar} from "./components/NavBar/NavBar";
import {LoginPage} from "./components/AuthPage/LoginPage/LoginPage";
import {RegisterPage} from "./components/AuthPage/RegisterPage/RegisterPage";
import {ManagementPage} from "./components/ManagementPage/ManagementPage";
import {decodeJwt} from "jose";

function App() {
    /*
    TODO:
        - ActivityAnalytics
        - ActivityPage
        - ManagementPage
    */

    const cookies = new Cookies()
    let username = ""
    let roleArray = []
    const authValue = cookies.get('authToken') !== undefined

    if (authValue) {
        const cookieAuthToken = cookies.get('authToken')

        if (cookieAuthToken) {
            roleArray = decodeJwt(cookieAuthToken).roles.split(',')
            username = decodeJwt(cookieAuthToken).sub
        }
    }

    return (
    <div className="App">
        <AuthContext.Provider value={{authValue, username, roleArray}}>
            {/*<ApiTest />*/}
            <NavBar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                {authValue && (
                    <>
                        <Route path="/activities" element={<ActivityPage />} />
                        <Route path="/analytics" element={<AnalyticsPage />} />
                        <Route path="/profile" element={<ProfilePage />} />

                        (roleArray.includes("ROLE_LEAD") || roleArray.includes("ROLE_ADMIN")) && (
                        <Route path="/management" element={<ManagementPage />} />
                        )
                    </>
                )}
                {!authValue && (
                    <>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </>
                )}
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
        </AuthContext.Provider>
    </div>
    );
}

export default App;
