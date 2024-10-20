const YOUTUBE_API_KEY="AIzaSyA9l4fy5BkG4eWayp2ER3K4aCdUEl0HVbQ"
export const GOOGLE_YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key="+YOUTUBE_API_KEY

export const GOOGLE_YOUTUBE_VIDEOINFO_API=`https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${YOUTUBE_API_KEY}&id=`

export const GOOGLE_YOUTUBE_CHANNELINFO_API=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${YOUTUBE_API_KEY}&id=`


export const OFFSET_LIVE_CHAT = 30;