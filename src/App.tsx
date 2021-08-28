import React, {useContext} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar";
import {AppRouter} from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Loader} from "./components/Loader";

function App() {
    const {auth} = useContext(AuthContext)
    const [user, loading, error] = useAuthState(auth)
    if(loading){
        return <Loader />
    }

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
