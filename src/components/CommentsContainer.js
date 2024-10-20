import React, { useState, useRef, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import { LuReply } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../utils/commentSlice";
import date from "date-and-time";

const CommentsContainer = () => {
    const [commentValue, setCommentValue] = useState("");
    const [replyValue, setReplyValue] = useState({});
    const [activeReplyBox, setActiveReplyBox] = useState(null);
    const replyRefs = useRef({});
    const commentsList = useSelector((store) => store.comment.commentsList);
    const dispatch = useDispatch();

    const addNewComment = () => {
        dispatch(
            addComment({
                id: date.format(new Date(), "DD/MMM/YYYY hh:mm:ss A"),
                username: "Nikhil Sharma",
                comment: commentValue,
                date: date.format(new Date(), "DD/MMM/YYYY hh:mm:ss A"),
                replies: [],
            })
        );
        setCommentValue("");
    };

    const addNewReply = (parentId) => {
        if (!replyValue[parentId]) return;
        dispatch(
            addComment({
                id: date.format(new Date(), "DD/MMM/YYYY hh:mm:ss A"),
                parentId,
                username: "Nikhil Sharma",
                comment: replyValue[parentId],
                date: date.format(new Date(), "DD/MMM/YYYY hh:mm:ss A"),
            })
        );

        setReplyValue((prev) => ({
            ...prev,
            [parentId]: "",
        }));

        setActiveReplyBox(null); // Hide the reply box after submitting

        if (replyRefs.current[parentId]) {
            replyRefs.current[parentId].focus();
        }
    };

    const handleReplyChange = (e, parentId) => {
        const { value } = e.target;
        setReplyValue((prev) => ({
            ...prev,
            [parentId]: value,
        }));
    };

    const toggleReplyBox = (commentId) => {
        setActiveReplyBox((prev) => (prev === commentId ? null : commentId));
    };

    useEffect(() => {
        if (activeReplyBox && replyRefs.current[activeReplyBox]) {
            replyRefs.current[activeReplyBox].focus();
        }
    }, [activeReplyBox, replyValue]);

    const CommentsList = ({ comments }) => {
        return comments.map((comment) => (
            <div key={comment.id} className="w-full">
                <Comment data={comment} />
                {/* REPLY BOX */}
                {activeReplyBox === comment.id && (
                    <div className="w-full flex mt-0 ms-2">
                        <form
                            className="w-full flex"
                            action="submit"
                            onSubmit={(e) => {
                                e.preventDefault();
                                addNewReply(comment.id);
                            }}
                        >
                            <input
                                className="flex w-full text-xs lg:text-sm p-1 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100"
                                type="text"
                                name={`reply-${comment.id}`}
                                id={`reply-${comment.id}`}
                                value={replyValue[comment.id] || ""}
                                onChange={(e) =>
                                    handleReplyChange(e, comment.id)
                                }
                                ref={(el) =>
                                    (replyRefs.current[comment.id] = el)
                                }
                                placeholder="Reply..."
                            />
                            <button
                                className="w-3/12 lg:w-2/12 bg-cyan-950 hover:bg-cyan-700 text-xs lg:text-sm text-white p-1 rounded-r-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="submit"
                            >
                                Reply
                            </button>
                        </form>
                    </div>
                )}
                {comment.replies && comment.replies.length > 0 && (
                    <div className="ms-4 my-1 ps-1 border-l-2 border-cyan-400">
                        <CommentsList comments={comment.replies} />
                    </div>
                )}
            </div>
        ));
    };

    const Comment = ({ data }) => {
        return (
            <div className="flex flex-col text-xs md:text-base items-start p-2 rounded-lg shadow-sm space-x-2">
                <div className="flex flex-wrap items-center space-x-2">
                    <FaRegUserCircle className="flex size-4 md:size-6 text-gray-500 dark:text-gray-400" />
                    <p className="font-bold text-gray-800 dark:text-gray-100">
                        {data.username}
                    </p>
                    <p className="text-xs font-thin text-gray-800 dark:text-gray-100 break-words">
                        {data.date}
                    </p>
                    {/* SHOW HIDE REPLY BOX USING THIS BUTTON */}
                    <button
                        className="size-4 rounded-sm bg-cyan-950 text-white font-thin transition-transform duration-200 hover:scale-105 hover:shadow-md hover:bg-gray-800"
                        onClick={() => toggleReplyBox(data.id)}
                    >
                        <LuReply />
                    </button>
                </div>
                <div className="flex mx-0">
                    <p className="text-gray-600 text-sm dark:text-gray-300">
                        {data.comment}
                    </p>
                </div>
            </div>
        );
    };
    return (
        <div className="w-full">
            <div className="w-full flex mt-2">
                <form
                    className="w-full flex"
                    action="submit"
                    onSubmit={(e) => {
                        e.preventDefault();
                        addNewComment();
                    }}
                >
                    <input
                        className="flex w-full text-xs lg:text-sm p-1 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100"
                        type="text"
                        name="comment"
                        id="comment"
                        value={commentValue}
                        onChange={(e) => setCommentValue(e.target.value)}
                        placeholder="Type your Comment..."
                    />
                    <button
                        className="w-3/12 lg:w-2/12 bg-blue-950 hover:bg-blue-700 text-xs lg:text-sm text-white p-1 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="submit"
                    >
                        Comment
                    </button>
                </form>
            </div>
            {commentsList.length > 0 ? (
                <CommentsList comments={commentsList} />
            ) : (
                <div className="w-full flex">
                    <h2 className="text-white text-lg p-2">
                        No Comments Available
                    </h2>
                </div>
            )}
        </div>
    );
};

export default CommentsContainer;
