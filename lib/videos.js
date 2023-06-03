

import videoData from '../data/video.json';

export const getVideos = async (querySearch) => {

    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${querySearch}&key=${YOUTUBE_API_KEY}`;


    const response = await fetch(url);

    const data = await response.json();

    const subData = await data.items;

    console.log(subData);

    return subData;
}