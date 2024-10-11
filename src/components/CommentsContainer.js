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
                <div className="ms-4 border border-l-2 border-lime-900">
                    <CommentsList commentsList={comment.replies}></CommentsList>
                </div>
            </div>
        ));
    };

    const Comment = ({ data }) => {
        return (
            <div className="flex p-2 border rounded-lg border-green-400 bg-gray-300">
                <FaRegUserCircle
                    className="my-auto"
                    size={30}
                ></FaRegUserCircle>
                <div>
                    <p>{data.username}</p>
                    <p>{data.comment}</p>
                </div>
            </div>
        );
    };
    return (
        <div className="bg-green-400">
            <CommentsList commentsList={commentsList}></CommentsList>
        </div>
    );
};

export default CommentsContainer;
