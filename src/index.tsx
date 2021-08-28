import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'
export type Auth = firebase.auth.Auth;
type Firestore = firebase.firestore.Firestore;


const firebaseConfig = {
    apiKey: "AIzaSyBWKArwCPRvU3xHk7xUbOEXY7le36c1B5Q",
    authDomain: "chat-react-82197.firebaseapp.com",
    projectId: "chat-react-82197",
    storageBucket: "chat-react-82197.appspot.com",
    messagingSenderId: "896457143174",
    appId: "1:896457143174:web:aa3d9d64765cb0c069f207",
    measurementId: "G-3MQNZMWYVK"
}; //this is where your firebase app values you copied will go

firebase.initializeApp(firebaseConfig);

export const auth:Auth = firebase.auth();
export const firestore: Firestore = firebase.firestore();
export const AuthContext = React.createContext({firebase, auth, firestore});

ReactDOM.render(
    <React.StrictMode>
        <AuthContext.Provider value={{
            firebase,
            auth,
            firestore
        }}>
            <App/>
        </AuthContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
