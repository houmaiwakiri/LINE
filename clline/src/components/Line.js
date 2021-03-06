import React, { useEffect, useState } from 'react';
import SignOut from './SignOut';
import {auth, db} from "../firebase.js";
import SendMessage from './SendMessage';

function Line() {
  const [messages, SetMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
    .orderBy("createdAt")
    .limit(50)
    .onSnapshot((snapshot) => {
      SetMessages(snapshot.docs.map((doc) =>doc.data()));
    })
  },[]);
  return (
    <div>
      {console.log(messages)}
      < SignOut/>
      <div className='messages'>
        <div><p id="p_newmsg_style"><a href="#newmsg">最新のメッセージを表示</a></p></div>
        {messages.map(({id, text ,photoURL, uid}) => (
          <div>
            <div key={id}
            className = {`message ${uid === auth.currentUser.uid ? "sent" : "received"
            }`}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
        {/** ページ内遷移用*/}
        <p id='p_newmsg'><span id="newmsg"></span></p>
      </div>
      <SendMessage />
    </div>
  )
}

export default Line;