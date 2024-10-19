import React, { useEffect, useState } from "react";
import { GOOGLE_YOUTUBE_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const response = await fetch(GOOGLE_YOUTUBE_API);
        const data = await response.json();
        setVideos(data.items);
    };
    return (
        <div className="w-full flex flex-wrap justify-center">
            {videos[10] && (
                <Link to={"/watch?v=" + videos[10].id} key={videos[10].id}>
                    <AdVideoCard info={videos[10]}></AdVideoCard>
                </Link>
            )}
            {videos.map((videos) => {
                return (
                    <Link to={"/watch?v=" + videos.id} key={videos.id}>
                        <VideoCard info={videos}></VideoCard>
                    </Link>
                );
            })}
        </div>
    );
};

export default VideoContainer;
