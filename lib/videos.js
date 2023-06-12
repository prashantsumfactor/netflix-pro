export const getCommonVideos = async (querySearch) => {

    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    const BASE_URL = 'youtube.googleapis.com/youtube/v33';

    try {
        const response = await fetch(`https://${BASE_URL}/${querySearch}&maxResults=25&key=${YOUTUBE_API_KEY}`);
        const data = await response.json();
        // const subData = await data.items;
        // console.log(subData);
        // return subData;
        if (data?.error) {
            console.error('Youtube Api Error', data.error);
            return [];
        }

        return data?.items.map((item) => {
            console.log({ id: item.id });
            const id = item?.id?.videoId || item.id;
            return {
                title: item.snippet.title,
                imgUrl: item.snippet.thumbnails.high.url,
                id,
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
    //return getCommonVideos(URL);
    return [];
}