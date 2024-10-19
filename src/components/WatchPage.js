import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { LuChevronDownSquare } from "react-icons/lu";
import {
    GOOGLE_YOUTUBE_CHANNELINFO_API,
    GOOGLE_YOUTUBE_VIDEOINFO_API,
} from "../utils/constants";

const WatchPage = () => {
    const [videoInfo, setVideoInfo] = useState(null);
    const [channelInfo, setChannelInfo] = useState({});
    const [showDescriptionBox, setShowDescriptionBox] = useState(false);
    const [searchParams] = useSearchParams();
    const videoID = searchParams.get("v");
    const dispatch = useDispatch();
    console.log("CHANNEL DATA : ", channelInfo);
    console.log("videoData DATA : ", videoInfo);
    useEffect(() => {
        getVideoInformation();
        dispatch(closeMenu());
    }, []);

    const getVideoInformation = async () => {
        let response = await fetch(GOOGLE_YOUTUBE_VIDEOINFO_API + videoID);
        const data = await response.json();
        setVideoInfo(data.items[0].snippet);
        const channelId = data.items[0].snippet.channelId;
        getChannelInformation(channelId);
    };

    const getChannelInformation = async (channelId) => {
        let response = await fetch(GOOGLE_YOUTUBE_CHANNELINFO_API + channelId);
        const data = await response.json();
        setChannelInfo({
            snippet: data.items[0].snippet,
            statistics: data.items[0].statistics,
        });
        console.log("CHANNEL DATA : ", channelInfo);
    };

    const handleDescriptionBoxVisibility = () => {
        setShowDescriptionBox(!showDescriptionBox);
    };
    return (
        <div className="flex w-full h-full flex-col px-4 sm:px-24 bg-slate-950">
            <div className="flex flex-wrap xl:flex-nowrap w-full p-4 bg-slate-950">
                {/* Video and Description Container  */}
                <div className="flex flex-col w-full lg:w-3/4 rounded-lg p-1">
                    {/* Video Container  */}
                    <iframe
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg"
                        src={"https://www.youtube.com/embed/" + videoID}
                        title="title"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    {/* Details Container  */}
                    <div className="w-full flex flex-col">
                        {/* Video Title  */}
                        <div className="flex items-center rounded-lg text-sm sm:text-lg md:text-xl font-bold text-white my-2 break-all">
                            {videoInfo?.localized.title}
                        </div>
                        {/* Video and Channel Details  */}
                        <div className="flex flex-wrap align-middle justify-between">
                            {/* Channel Image, Title and Sub Count  */}
                            <div className="flex justify-between items-center space-x-2">
                                {/* Channel Image  */}
                                <div className="flex rounded-full">
                                    <img
                                        className="rounded-full size-8 sm:size-10 md:size-12"
                                        src={
                                            channelInfo?.snippet?.thumbnails
                                                ?.default?.url
                                        }
                                        alt=""
                                    />
                                </div>
                                {/* Channel Title  */}
                                <div className="flex flex-col text-white p-1">
                                    <span className="flex text-sm md:text-base font-bold">
                                        {channelInfo?.snippet?.localized.title}
                                    </span>
                                    <span className="flex font-light text-xs md:text-sm">
                                        {channelInfo?.statistics
                                            ?.subscriberCount >= 1000000
                                            ? channelInfo?.statistics
                                                  ?.subscriberCount /
                                                  1000000 +
                                              "M Subscribers"
                                            : channelInfo?.statistics
                                                  ?.subscriberCount /
                                                  1000 +
                                              "K Subscribers"}
                                    </span>
                                </div>
                                {/* Subscribe Box  */}
                                <div className="flex justify-end">
                                    <button className="bg-red-900 text-white  rounded-full py-1 md:py-2 px-2 md:px-4 transition-transform duration-200 hover:scale-105 hover:shadow-md hover:bg-red-950">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            {/* Like, Dislike, Download, Share Button  */}
                            <div className="flex flex-wrap space-x-2 space-y-1">
                                {/* Like Dislike Button  */}
                                <div
                                    className="flex items-center
                                    "
                                >
                                    <button
                                        className="flex bg-slate-700 rounded-l-3xl
                                    text-white py-1 md:py-2 px-2 md:px-4 transition-transform duration-200 hover:scale-105 hover:shadow-md hover:bg-slate-900 border-r-2 border-white pe-2"
                                    >
                                        <AiOutlineLike className="size-6"></AiOutlineLike>
                                        10k Likes
                                    </button>
                                    <button
                                        className="flex bg-slate-700 rounded-r-3xl
                                    text-white py-1 md:py-2 px-2 md:px-4 transition-transform duration-200 hover:scale-105 hover:shadow-md hover:bg-slate-900 ps-2"
                                    >
                                        <AiOutlineDislike className="size-6"></AiOutlineDislike>
                                    </button>
                                </div>
                                {/* Share Button  */}
                                <div
                                    className="flex items-center
                                    "
                                >
                                    <button
                                        className="flex bg-slate-700 rounded-3xl
                                    text-white py-1 md:py-2 px-2 md:px-4 transition-transform duration-200 hover:scale-105 hover:shadow-md hover:bg-slate-900 border-white"
                                    >
                                        <IoShareSocialOutline className="size-6"></IoShareSocialOutline>
                                        Share
                                    </button>
                                </div>
                                {/* Download Button  */}

                                <div
                                    className="flex items-center
                                    "
                                >
                                    <button
                                        className="flex bg-slate-700 rounded-3xl
                                    text-white py-1 md:py-2 px-2 md:px-4 transition-transform duration-200 hover:scale-105 hover:shadow-md hover:bg-slate-900 border-white"
                                    >
                                        <LuDownload className="size-6"></LuDownload>
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Description Container  */}
                    <div className="w-full flex flex-col">
                        {/* Header  */}
                        <div>
                            {/* Video and Channel Stats  */}
                            <div className="flex items-center flex-wrap m-2">
                                <span className="flex mx-2 text-sm md:text-base font-semibold  text-white break-all">
                                    {"Published on " +
                                        videoInfo?.publishedAt.substring(0, 10)}
                                </span>
                                <span className="flex mx-2 text-sm md:text-base font-semibold text-white break-all">
                                    {channelInfo?.statistics?.videoCount +
                                        " Videos on Channel"}
                                </span>
                                <button
                                    className="ms-auto text-slate-400 transition-transform duration-200 hover:scale-105 hover:shadow-md hover:bg-slate-900"
                                    onClick={handleDescriptionBoxVisibility}
                                >
                                    <LuChevronDownSquare className="size-6 md:size-8"></LuChevronDownSquare>
                                </button>
                            </div>
                        </div>
                        {/* Body  */}
                        <div
                            className={`flex justify-start items-center m-2 text-white text-xs sm:text-sm md:text-base ${
                                showDescriptionBox
                                    ? "flex transition-transform duration-200"
                                    : "hidden"
                            }`}
                        >
                            {videoInfo?.description}
                        </div>
                    </div>
                </div>
                {/* LiveChat Container  */}
                <div className="flex w-full lg:w-1/4 max-h-[500px] ">
                    <LiveChat></LiveChat>
                </div> 
            </div>
            {/* Comments Container  */}
            <div className="flex p-4">
                <CommentsContainer></CommentsContainer>
            </div> 
        </div>
    );
};

export default WatchPage;
