import React, { useEffect, useState } from "react";
import { GOOGLE_YOUTUBE_API } from "../utils/constants";
import VideoCard, {AdVideoCard} from "./VideoCard";
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
        <div className="flex flex-wrap">
            {videos[0] && <AdVideoCard info={videos[0]}></AdVideoCard>}
            {videos.map((videos) => {
                return (
                    <Link to={"/watch?v=" + videos.id} key={videos.id}>
                        <VideoCard  info={videos}></VideoCard>
                    </Link>
                );
            })}
        </div>
    );
};

export default VideoContainer;
