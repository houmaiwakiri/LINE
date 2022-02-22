import React, { useState } from 'react'
import firebase from "firebase/compat/app";
import {db, auth} from "../firebase.js";
import SendIcon from "@mui/icons-material/Send";
import { Input } from '@mui/material';



function SendMessage() {
    const [message, setMessage] = useState("");
    function sendMessage(e){
        e.preventDefault();
        
        const {uid, photoURL} = auth.currentUser;

        db.collection("messages").add({
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMessage("");
    }
  return (
    <div>
        <form onSubmit={sendMessage}>
            <div className='sendMessage'>
                <Input
                    placeholder="メッセージを入力" 
                    type="text" 
                    onChange={(e) => setMessage(e.target.value)}
                    value = {message} />
                    <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
            </div>
        </form>
    </div>
  )
}

export default SendMessage;