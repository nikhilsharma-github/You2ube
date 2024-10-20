import React from "react";
import VideoContainer from "./VideoContainer";
const RecommendedVideos = () => {
    return (
        <div className="flex flex-col px-4 py-0 w-full lg:w-1/4">
            <h2 className="text-white text-bold text-xl sm:text-2xl">
                Recommended
            </h2>
            <VideoContainer pageType="watchpage"></VideoContainer>
        </div>
    );
};

export default RecommendedVideos;
