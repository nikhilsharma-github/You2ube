import React from "react";

const VideoCard = ({ info, promoted }) => {
    const { title, channelTitle, publishedAt, thumbnails } = info.snippet;
    const { viewCount } = info.statistics;

    return (
        <div className="w-48 h-72 sm:w-60 m-2 shadow-lg rounded-lg bg-white dark:bg-gray-800 transition-colors duration-200">
        {promoted && <span className="fixed rounded-tl-lg p-1 font-bold rounded-br-lg z-50 text-black bg-yellow-400">Promoted</span>}
        <img
            className="rounded-t-lg w-full object-cover"
            src={thumbnails.medium.url}
            alt="thumbnailImg"
        />
        <ul className="p-4">
            <li className="font-bold text-sm text-gray-800 dark:text-gray-100 overflow-y-scroll">
                {title.length > 50 ? title.substring(0, 50) + "..." : title}
            </li>
            <li className="text-xs text-gray-600 dark:text-gray-400 mt-1">{channelTitle}</li>
            <li className="text-xs text-gray-600 dark:text-gray-400 mt-1">{viewCount} views</li>
            <li className="text-xs text-gray-600 dark:text-gray-400 mt-1">{publishedAt}</li>
        </ul>
    </div>
    
    );
};

export const AdVideoCard = ({info}) => {
    return (
            <VideoCard info={info} promoted={true}></VideoCard>
    );
};

export default VideoCard;
