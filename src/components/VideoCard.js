import React from "react";

const VideoCard = ({ info, promoted, pageType }) => {
    const { title, channelTitle, publishedAt, thumbnails } = info.snippet;
    const { viewCount } = info.statistics;

    return (
        <div className={`${pageType==='homepage'?"w-48 sm:w-60":"w-60 md:w-80 lg:w-full"} ${pageType==='homepage'?"h-72":"h-80"} m-2 shadow-lg  rounded-lg bg-white dark:bg-gray-800 transition-transform duration-200 hover:scale-95 hover:shadow-md hover:bg-gray-800`}>
        {promoted && <span className="absolute rounded-tl-lg p-1 font-bold rounded-br-lg  text-black bg-yellow-400">Promoted</span>}
        <img
            className="rounded-t-lg w-full object-cover"
            src={thumbnails.medium.url}
            alt="thumbnailImg"
        />
        <ul className="p-4">
            <li className="font-bold text-sm text-gray-800 dark:text-gray-100 overflow-y-clip break-all">
                {title.length > 50 ? title.substring(0, 50) + "..." : title}
            </li>
            <li className="text-xs text-gray-600 dark:text-gray-400 mt-1">{channelTitle}</li>
            <li className="text-xs text-gray-600 dark:text-gray-400 mt-1">{viewCount} views</li>
            <li className="text-xs text-gray-600 dark:text-gray-400 mt-1">{publishedAt}</li>
        </ul>
    </div>
    
    );
};

export const AdVideoCard = ({info, pageType}) => {
    return (
            <VideoCard info={info} pageType={pageType} promoted={true}></VideoCard>
    );
};

export default VideoCard;
