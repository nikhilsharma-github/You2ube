import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
    generateRandomSentence,
    generateRandomUsername,
} from "../utils/helper";

const LiveChat = () => {
    const liveMessages = useSelector((store) => store.chat.messages);
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage]= useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            getLiveChatMessages();
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const sendLiveMessage = (e) =>{
        dispatch(addMessage({
            name:"Nickillusion",
            comment:liveMessage+liveMessage.length
        }));
        setLiveMessage("");
    }
    const getLiveChatMessages = async () => {
        dispatch(
            addMessage({
                name: generateRandomUsername(),
                comment: generateRandomSentence(),
            })
        );
    };
    return (
        <>
            <div className="w-full h-[600px] p-2 m-2 border border-green-800 bg-slate-100 flex flex-col-reverse overflow-y-scroll">
                <div>
                    {liveMessages.map((message) => {
                        return (
                            <ChatMessage
                                name={message.name}
                                comment={message.comment}
                            ></ChatMessage>
                        );
                    })}
                </div>
            </div>
            <form action="submit" onSubmit={(e)=>e.preventDefault()}>
                <input type="text" name="" id="" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} />
                <button onClick={(e)=>sendLiveMessage(e)}>Send</button>
            </form>
        </>
    );
};

export default LiveChat;
