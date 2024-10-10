import React from "react";

const VideoCard = ({ info }) => {
    const { title, channelTitle, publishedAt, thumbnails } = info.snippet;
    const { viewCount } = info.statistics;

    return (
        <div className="w-60 m-2 shadow-lg rounded-lg bg-gray-300">
            <img
                className="rounded-lg"
                src={thumbnails.medium.url}
                alt="thumbnailImg"
            />
            <ul className="m-2">
                <li className="font-bold text-sm">
                    {title.length > 60 ? title.substring(0, 60) + "..." : title}
                </li>
                <li className="text-xs">{channelTitle}</li>
                <li className="text-xs">{viewCount} views</li>
                <li className="text-xs">{publishedAt}</li>
            </ul>
        </div>
    );
};

export const AdVideoCard = ({info}) => {
    return (
        <div className="border border-yellow-600">
            <VideoCard info={info}></VideoCard>
        </div>
    );
};

export default VideoCard;
