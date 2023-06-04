export const getVideos = async (querySearch) => {

    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${querySearch}&key=${YOUTUBE_API_KEY}`;

    try {
        const response = await fetch(url);
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