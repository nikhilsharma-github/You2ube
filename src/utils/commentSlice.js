import { createSlice } from "@reduxjs/toolkit";
import date from "date-and-time";

const commentSlice = createSlice({
    name: "comment",
    initialState: {
        commentsList: [
            {
                id: "20/Oct/2024 07:42:28 PM",
                username: "Ankur Sharma",
                comment:
                    "The editing and transitions were super smooth. Can't wait to see more content like this!",
                date: "20/Oct/2024 07:42:28 PM",
                replies: [
                    {
                        id: "20/Oct/2024 07:42:44 PM",
                        username: "Srishti Roy",
                        comment:
                            "Wow, this is fantastic! The visuals are stunning and the music fits perfectly. Great job!",
                        date: "20/Oct/2024 07:42:44 PM",
                        replies: [
                            {
                                id: "20/Oct/2024 07:42:49 PM",
                                username: "Gajanan Mhatre",
                                comment: "Agree",
                                date: "20/Oct/2024 07:42:49 PM",
                                replies: [
                                    {
                                        id: "20/Oct/2024 07:44:33 PM",
                                        username: "Benjamin Ploetz",
                                        comment:
                                            "The content was interesting, but the video length was too long for the message. A more concise edit would be better.",
                                        date: "20/Oct/2024 07:44:33 PM",
                                        replies: [
                                            {
                                                id: "20/Oct/2024 07:44:40 PM",
                                                username: "Suryaniketan Saha",
                                                comment:
                                                    "I appreciate the effort, but the camera work was shaky. Using a tripod might help stabilize the shots.",
                                                date: "20/Oct/2024 07:44:40 PM",
                                                replies: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: "20/Oct/2024 07:44:03 PM",
                                username: "Nikhil Sharma",
                                comment:
                                    "Interesting idea, but the execution wasn't very clear. I found it hard to follow the storyline.",
                                date: "20/Oct/2024 07:44:03 PM",
                                replies: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: "20/Oct/2024 07:42:58 PM",
                username: "Jassi Gill",
                comment:
                    "Incredible video! Your creativity shines through every frame. Thanks for sharing this masterpiece!",
                date: "20/Oct/2024 07:42:58 PM",
                replies: [
                    {
                        id: "20/Oct/2024 07:43:33 PM",
                        username: "Dharampal Doggo",
                        comment:
                            "Fantastic job! The video is so captivating and the effects are amazing. Kudos to you!",
                        date: "20/Oct/2024 07:43:33 PM",
                        replies: [],
                    },
                ],
            },
            {
                id: "20/Oct/2024 07:43:08 PM",
                username: "Ayushi Sharma",
                comment:
                    "This is awesome! The way you captured the scenes is just perfect. Looking forward to more videos from you!",
                date: "20/Oct/2024 07:43:08 PM",
                replies: [],
            },
            {
                id: "20/Oct/2024 07:43:21 PM",
                username: "Christopher Nolan",
                comment:
                    "Impressive work! The effort and dedication you put into this video really shows. Excellent job!",
                date: "20/Oct/2024 07:43:21 PM",
                replies: [
                    {
                        id: "20/Oct/2024 07:44:14 PM",
                        username: "Force Law",
                        comment:
                            "I appreciate the effort, but the camera work was shaky. Using a tripod might help stabilize the shots.",
                        date: "20/Oct/2024 07:44:14 PM",
                        replies: [],
                    },
                ],
            },
        ],
    },
    reducers: {
        addComment: (state, action) => {
            const { parentId, username, comment } = action.payload;

            // Function to recursively find the comment and add a reply
            const findAndAddReply = (comments) => {
                for (let i = 0; i < comments.length; i++) {
                    if (comments[i].id === parentId && comment) {
                        comments[i].replies.push({
                            id: date.format(
                                new Date(),
                                "DD/MMM/YYYY hh:mm:ss A"
                            ),
                            username,
                            comment,
                            date: date.format(
                                new Date(),
                                "DD/MMM/YYYY hh:mm:ss A"
                            ),
                            replies: [],
                        });
                        return true;
                    } else if (comments[i].replies.length > 0) {
                        if (findAndAddReply(comments[i].replies)) {
                            return true;
                        }
                    }
                }
                return false;
            };

            if (parentId) {
                // Add a reply to a specific comment
                findAndAddReply(state.commentsList);
            } else {
                // Add a new comment
                if (comment) {
                    state.commentsList.push({
                        id: date.format(new Date(), "DD/MMM/YYYY hh:mm:ss A"),
                        username,
                        comment,
                        date: date.format(new Date(), "DD/MMM/YYYY hh:mm:ss A"),
                        replies: [],
                    });
                }
            }
        },
    },
});

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
