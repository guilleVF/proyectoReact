import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdw4IO41OQbOrbmnkNajxzzCnk51jxcBo",
  authDomain: "proyectoreact-6904f.firebaseapp.com",
  projectId: "proyectoreact-6904f",
  storageBucket: "proyectoreact-6904f.appspot.com",
  messagingSenderId: "683449115459",
  appId: "1:683449115459:web:288512a7ec72e84a7f05f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
