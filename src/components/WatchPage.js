import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoID = searchParams.get("v");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, []);
    return (
        <div className="flex flex-col w-[1200px]">
            <div className="flex w-screen h-full">
                <iframe
                    width="1200"
                    height="600"
                    src={"https://www.youtube.com/embed/" + videoID}
                    title="title"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
            <CommentsContainer></CommentsContainer>
        </div>
    );
};

export default WatchPage;
