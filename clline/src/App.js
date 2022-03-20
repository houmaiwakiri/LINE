import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./firebase.js";
import Line from './components/Line';

function MainApp() {
  const [user] = useAuthState(auth);
  return (
    <div>   
      {user ? <Line /> : <SignIn /> } 
    </div>
  );
}

export default MainApp;