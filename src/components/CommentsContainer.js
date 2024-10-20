import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const CommentsContainer = () => {
    const commentsList = [
        {
            username: "Nikhil",
            comment:
                "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
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
            comment:
                "Lorem Ipsum is simply dummy text of the printing and typesetting",
            replies: [
                {
                    username: "Nikhil",
                    comment: "Lorem Ipsum is sim",
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
                    comment:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting",
                    replies: [
                        {
                            username: "Nikhil",
                            comment: "Lorem Ipsum is simply dummy text of the",
                            replies: [],
                        },
                    ],
                },
            ],
        },
        {
            username: "Nikhil",
            comment:
                "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
            replies: [
                {
                    username: "Nikhil",
                    comment:
                        "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
                    replies: [
                        {
                            username: "Nikhil",
                            comment:
                                "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
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
                            comment:
                                "Lorem Ipsum is simply dummy text of the printing and typesetting",
                            replies: [
                                {
                                    username: "Nikhil",
                                    comment:
                                        "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
                                    replies: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    username: "Nikhil",
                    comment:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting",
                    replies: [],
                },
                {
                    username: "Nikhil",
                    comment:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting",
                    replies: [],
                },
            ],
        },
    ];

    const CommentsList = ({ commentsList }) => {
        return commentsList.map((comment) => (
            <div className="w-full">
                <Comment data={comment}></Comment>
                <div className="ms-4 border-l-2 border-cyan-400">
                    <CommentsList commentsList={comment.replies}></CommentsList>
                </div>
            </div>
        ));
    };

    const Comment = ({ data }) => {
        return (
            <div className="flex flex-col text-xs md:text-base items-start p-2 rounded-lg shadow-sm space-x-2">
                <div className="flex space-x-2">
                    <FaRegUserCircle className="flex size-4 md:size-6 text-gray-500 dark:text-gray-400" />
                    <p className="font-bold text-gray-800 dark:text-gray-100">
                        {data.username}
                    </p>
                </div>
                <div className="flex">
                    <p className="text-gray-600 text-sm dark:text-gray-300">
                        {data.comment}
                    </p>
                </div>
            </div>
        );
    };
    return (
        <div className="w-full">
            <CommentsList commentsList={commentsList}></CommentsList>
        </div>
    );
};

export default CommentsContainer;
