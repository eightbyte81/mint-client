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
import {NotFoundPage} from "./components/NotFoundPage";
import {NavBar} from "./components/MainPage/NavBar";

function App() {
    const cookies = new Cookies()
    const authValue = cookies.get('authToken') !== undefined

    return (
    <div className="App">
        <AuthContext.Provider value={authValue}>
            {/*<ApiTest />*/}
            <NavBar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/activities" element={<ActivityPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
        </AuthContext.Provider>
    </div>
    );
}

export default App;
