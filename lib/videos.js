import videoTextData from '../data/video.json';

const fetchVideo  = async (querySearch) => {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    const BASE_URL = 'youtube.googleapis.com/youtube/v3';
    const response = await fetch(`https://${BASE_URL}/${querySearch}&maxResults=25&key=${YOUTUBE_API_KEY}`);
    return await response.json();
}

export const getCommonVideos = async (querySearch) => {
    try {
        const isDev = process.env.DEVELOPMENT;
        const data = isDev ? videoTextData : await fetchVideo(querySearch);
        if (data?.error) {
            console.error('Youtube Api Error', data.error);
            return [];
        }

        return data?.items.map((item) => {
            console.log({ id: item.id });
            const id = item?.id?.videoId || item.id;
            const snippet = item.snippet;
            return {
                title: snippet.title,
                imgUrl: snippet.thumbnails.high.url,
                id,
                description: snippet.description,
                publishTime: snippet.publishedAt,
                channelTitle: snippet.channelTitle,
                statistics: item.statistics ? item.statistics : { viewCount: 0 },
            }
        });
    }
    catch (e) {
        console.error('Somthing wend wrong with video library', e);
        return [];
    }
}

export const getPopularVideo = () => {
    const URL = 'videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&regionCode=IN';
    return getCommonVideos(URL);
}

export const getVideos = (querySearch) => {
    const URL = `search?part=snippet&type=video&q=${querySearch}`;
    return getCommonVideos(URL);
    //return [];
}

export const getVideoData = (videoId) => {
    const URL = `videos?part=snippet%2C%20contentDetails%2C%20statistics&id=${videoId}`;
    return getCommonVideos(URL);
}