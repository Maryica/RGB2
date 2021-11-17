import React, {useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {useState} from "react/cjs/react.development";
import "./index.css";

const App=()=>{
  const[messageList, setMessageList]=useState ([]);
  const[value, setValue]=useState("");

 const ref = useRef(null);



  useEffect(()=>{
    const lastMessages=messageList[messageList.length-1];
    let timerId=null
    if (messageList.length && lastMessages.author!=="Bot"){
      timerId=setTimeout(()=>{
        setMessageList([...messageList, {author: "Bot", Text: "I am bot"}]);
    }, 1500);
  }
   return() =>clearInterval(timerId);
  },[messageList]);

  useEffect(()=> {
    ref.current?.focus()
  }, []);

  const sendMessage=()=>{
    setMessageList([...messageList, {author: "User", Text: value}]);
      setValue("");
  };

  return (
  <div>
    {messageList.map((Text)=>(
    <div>{Text.Text}</div>
    ))}

    <input 
    ref={ref}
    placeholder= "enter message..." 
    value={value} 
    onChange={(e)=>setValue(e.target.value)}
    />
    <button 
    onClick={sendMessage}>send message</button>
    </div>
  );
    };

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);