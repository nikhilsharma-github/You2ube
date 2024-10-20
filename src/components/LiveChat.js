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
    const [liveMessage, setLiveMessage] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            getLiveChatMessages();
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const sendLiveMessage = (e) => {
        dispatch(
            addMessage({
                name: "Nickillusion",
                comment: liveMessage + liveMessage.length,
            })
        );
        setLiveMessage("");
    };
    const getLiveChatMessages = async () => {
        dispatch(
            addMessage({
                name: generateRandomUsername(),
                comment: generateRandomSentence(),
            })
        );
    };
    return (
        <div className="w-full align-baseline max-h-[650px] flex flex-col p-2 m-1 bg-gray-800 rounded-lg shadow-lg">
            <div>
                <h1 className="text-white font-bold border-b-2">Live Chat</h1>
            </div>
            <div className="flex align-top flex-col-reverse overflow-y-scroll p-1 border-b border-gray-300 dark:border-gray-700 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-800">
                {liveMessages.map((message, index) => (
                    <ChatMessage
                        key={index}
                        name={message.name}
                        comment={message.comment}
                    ></ChatMessage>
                ))}
            </div>
            <div className="w-full flex mt-2">
                <form
                    className="w-full flex"
                    action="submit"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        className="flex w-10/12 lg:w-3/4 text-sm p-1 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100"
                        type="text"
                        name="liveMessage"
                        id="liveMessage"
                        value={liveMessage}
                        onChange={(e) => setLiveMessage(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button
                        className="w-2/12 lg:w-1/4 bg-blue-500 text-sm text-white p-1 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800"
                        onClick={(e) => sendLiveMessage(e)}
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LiveChat;
