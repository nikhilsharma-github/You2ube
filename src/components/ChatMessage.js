import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, comment, date }) => {
    return (
        <div className="flex flex-col items-start space-x-1 my-1 p-1 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
            <div className="flex justify-start items-center space-x-2">
                <FaRegUserCircle className="size-4 md:size-6 my-auto text-gray-500 dark:text-gray-400" />
                <p className="text-xs sm:text-sm font-semibold sm:font-bold text-gray-800 dark:text-gray-100 break-words">
                    {name}
                </p>
                <p className="text-xs font-thin text-gray-800 dark:text-gray-100 break-words">
                    {date}
                </p>
            </div>
            <div className="flex justify-start items-center">
                <p className="text-xs sm:text-smtext-gray-600 dark:text-gray-300">
                    {comment}
                </p>
            </div>
        </div>
    );
};

export default ChatMessage;
