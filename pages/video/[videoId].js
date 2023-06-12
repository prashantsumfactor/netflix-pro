import { useRouter } from "next/router";

const Video = () => {
    const router = useRouter();
    return <div>video id {router.query.videoId}</div>;
}

export default Video;