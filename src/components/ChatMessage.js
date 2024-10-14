import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, comment }) => {
    return (
        <div className="flex items-center space-x-2 p-2 border rounded-lg border-orange-400 bg-emerald-500">
                <FaRegUserCircle
                    className="my-auto"
                    size={30}
                ></FaRegUserCircle>
                <p className="font-bold">{name}</p>
                <p>{comment}</p>
        </div>
    );
};

export default ChatMessage;
