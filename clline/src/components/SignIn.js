import React from 'react';
import firebase from "firebase/compat/app";
import { auth } from "../firebase";
import "@mui/material";
import "@mui/icons-material";
import { Button } from '@mui/material';

function SignIn() {
    function signInWithGoogle (){
        const provider = new firebase.auth.GoogleAuthProvider(); 
        auth.signInWithPopup(provider);
    }    
    return (
      <div>
          <Button onClick={ signInWithGoogle }>googleでログイン</Button>
      </div>
    );
}

export default SignIn;