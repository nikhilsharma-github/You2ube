import { createSlice } from "@reduxjs/toolkit";
import date from "date-and-time";

const commentSlice = createSlice({
    name: "comment",
    initialState: {
        commentsList: [],
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
