import './App.css'
import React from "react"
import {MainPage} from "./components/MainPage/MainPage"
import {AuthContext} from "./components/AuthContext"
import Cookies from "universal-cookie"
import ApiTest from "./api/ApiTest";

function App() {
    const cookies = new Cookies()
    const authValue = cookies.get('authToken') !== undefined

    return (
    <div className="App">
        <AuthContext.Provider value={authValue}>
            <ApiTest />
            <MainPage />
        </AuthContext.Provider>
    </div>
    );
}

export default App;
