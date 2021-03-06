import React, { useState } from 'react'
import firebase from "firebase/compat/app";
import {db, auth} from "../firebase.js";
import SendIcon from "@mui/icons-material/Send";
import { Input } from '@mui/material';
import { Button } from "@mui/material";

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
                    style={{
                        width: "78%",
                        fontSize: "15px",
                        fontWeight: "550",
                        marginLeft: "5px",
                        marginBottom: "-3px",
                    }}
                    placeholder="メッセージを入力" 
                    type="text" 
                    onChange={(e) => setMessage(e.target.value)}
                    value = {message} 
                />
                <SendIcon onClick={sendMessage} style={{ color: "#7AC2FF", marginLeft: "20px" }} />
                <Button id="app">スタンプ</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMessage;