import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from '../../styles/Video.module.css'
import clx from "classnames";
import { getVideoData } from "@/lib/videos";
import NavBar from "@/components/nav/navbar";

Modal.setAppElement('#__next');

export async function getStaticProps(context){
    console.log({context});
    const videoId = context.params.videoId;
    const videoArr = await getVideoData(videoId);
    console.log({videoArr});
    return{
        props : {
            video : videoArr.length > 0 ? videoArr[0] : {} ,
        },
        revalidate : 10, // in Seconds
    };
}

export async function getStaticPaths() {
    const listOfVideos = ['4HRC6c5-2lQ','EdftT8GMU1U','cAMHx-m9oh8','4HRC6c5-2lQ'];
    const paths  = listOfVideos.map((videoId) => ({
        params : {videoId},
    }));
    return { paths, fallback : 'blocking'};
}

const Video = ({video}) => {
    const router = useRouter();
    const {
        title,
        publishTime,
        description,
        channelTitle,
        statistics: { viewCount } = { viewCount: 0 },
      } = video;
      
    return (
        <div className={styles.container}>
            <NavBar/>
            <Modal
                isOpen={true}
                onRequestClose={() => router.back()}
                overlayClassName={styles.overlay}
                className={styles.modal}
                contentLabel="Example Modal">
                <iframe
                    className={styles.videoPlayer}
                    id="ytplayer"
                    width="100%"
                    height="360"
                    src={`http://www.youtube.com/embed/${router.query.videoId}?autoplay=1&controls=0&rel=1`}
                    frameborder="0"
                    allowfullscreen>
                </iframe>
                <div className={styles.modalBody}>
                    <div className={styles.modalBodyContent}>
                        <div className={styles.col1}>
                            <p className={styles.publishTime}>{publishTime}</p>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.description}>{description}</p>
                        </div>
                        <div className={styles.col2}>
                            <p className={clx(styles.subText, styles.subTextWrapper)}>
                                <span className={styles.textColor}>Cast: </span>
                                <span className={styles.channelTitle}>{channelTitle}</span>
                            </p>
                            <p className={clx(styles.subText, styles.subTextWrapper)}>
                                <span className={styles.textColor}>VoewCount: </span>
                                <span className={styles.viewCount}>{viewCount}</span>
                            </p>
                        </div>
                    </div>

                </div>
            </Modal>
        </div>
    );
}

export default Video;