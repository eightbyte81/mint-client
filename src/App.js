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
    const cookies = new Cookies()
    let roleArray = []
    const authValue = cookies.get('authToken') !== undefined || sessionStorage.getItem('authToken') !== null

    if (authValue) {
        const cookieAuthToken = cookies.get('authToken')
        const sessionAuthToken = sessionStorage.getItem('authToken')

        if (cookieAuthToken) roleArray = decodeJwt(cookieAuthToken).roles.split(',')
        if (sessionAuthToken) roleArray = decodeJwt(sessionAuthToken).roles.split(',')
    }

    return (
    <div className="App">
        <AuthContext.Provider value={{authValue, roleArray}}>
            {/*<ApiTest />*/}
            <NavBar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            {authValue && (
                <>
                    <Route path="/activities" element={<ActivityPage />} />
                    <Route path="/analytics" element={<AnalyticsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </>
            )}
            {(roleArray.includes("ROLE_LEAD") || roleArray.includes("ROLE_ADMIN")) && (
                <Route path="/management" element={<ManagementPage />} />
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
