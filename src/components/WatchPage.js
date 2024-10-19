import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoID = searchParams.get("v");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, []);
    return (
        <div className="flex w-full flex-col px-4 sm:px-24 bg-slate-950">
            <div className="flex flex-wrap xl:flex-nowrap w-full p-4 bg-slate-950">
                <div className="flex w-full lg:w-3/4 h-[300px] md:h-[400px] lg:h-[500px] rounded-lg p-1">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src={"https://www.youtube.com/embed/" + videoID}
                        title="title"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="flex w-full lg:w-1/4">
                    <LiveChat></LiveChat>
                </div>
            </div>
            <div className="flex p-4">
                <CommentsContainer></CommentsContainer>
            </div>
        </div>
    );
};

export default WatchPage;
