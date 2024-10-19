import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const CommentsContainer = () => {
    const commentsList = [
        {
            username: "Nikhil",
            comment: "Hello Bro",
            replies: [
                {
                    username: "Nikhil",
                    comment: "Hello Bro",
                    replies: [],
                },
            ],
        },
        {
            username: "Nikhil",
            comment: "Hello Bro",
            replies: [
                {
                    username: "Nikhil",
                    comment: "Hello Bro",
                    replies: [
                        {
                            username: "Nikhil",
                            comment: "Hello Bro",
                            replies: [],
                        },
                    ],
                },
                {
                    username: "Nikhil",
                    comment: "Hello Bro",
                    replies: [
                        {
                            username: "Nikhil",
                            comment: "Hello Bro",
                            replies: [],
                        },
                    ],
                },
            ],
        },
        {
            username: "Nikhil",
            comment: "Hello Bro",
            replies: [
                {
                    username: "Nikhil",
                    comment: "Hello Bro",
                    replies: [
                        {
                            username: "Nikhil",
                            comment: "Hello Bro",
                            replies: [
                                {
                                    username: "Nikhil",
                                    comment: "Hello Bro",
                                    replies: [],
                                },
                            ],
                        },
                        {
                            username: "Nikhil",
                            comment: "Hello Bro",
                            replies: [
                                {
                                    username: "Nikhil",
                                    comment: "Hello Bro",
                                    replies: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    username: "Nikhil",
                    comment: "Hello Bro",
                    replies: [],
                },
                {
                    username: "Nikhil",
                    comment: "Hello Bro",
                    replies: [],
                },
            ],
        },
    ];

    const CommentsList = ({ commentsList }) => {
        return commentsList.map((comment) => (
            <div>
                <Comment data={comment}></Comment>
                <div className="ms-4 border-l-2 border-cyan-400">
                    <CommentsList commentsList={comment.replies}></CommentsList>
                </div>
            </div>
        ));
    };

    const Comment = ({ data }) => {
        return (
            <div className="flex text-xs md:text-base items-start p-2  rounded-lg shadow-sm space-x-2">
                <FaRegUserCircle
                    className="text-gray-500 dark:text-gray-400"
                    size={30}
                />
                <div>
                    <p className="font-bold text-gray-800 dark:text-gray-100">
                        {data.username}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        {data.comment}
                    </p>
                </div>
            </div>
        );
    };
    return (
        <div className="">
            <CommentsList commentsList={commentsList}></CommentsList>
        </div>
    );
};

export default CommentsContainer;
