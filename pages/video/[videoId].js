import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from '../../styles/Video.module.css'
Modal.setAppElement('#__next');


const Video = () => {
    const router = useRouter();

    const video = {
        title : 'Hi heros',
        publishTime : '1990-05-23',
        description : 'A team of superos to save the world from bad culprit that want to destroy planets.',
        channelTitle : 'Marvel Movies',
        viewCount : 10000,
    };

    const { title, publishTime, description, channelTitle, viewCount } = video;

    return (
        <div className={styles.container}>
            <Modal
                isOpen={true}
                onRequestClose={() => router.back()}
                style={styles.overlay}
                className={styles.modal}
                contentLabel="Example Modal">
                <iframe
                    className={styles.videoPlayer}
                    id="ytplayer"
                    width="100%"
                    height="360"
                    src={`http://www.youtube.com/embed/${router.query.videoId}?autoplay=1&cc_load_policy=1&controls=0&rel=1`}
                    frameborder="0"
                    allowfullscreen>
                </iframe>
                <div className={styles.modalBody}>
                    <div className={styles.modalBody}>
                        <div className={styles.col1}>
                            <p className={styles.publishTime}>{publishTime}</p>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.description}>{description}</p>
                        </div>
                        <div className={styles.col2}>
                            <p className={styles.subText}>
                                <span className={styles.textColor}>Cast : </span>
                                <span className={styles.channelTitle}>{channelTitle}</span>
                            </p>
                            <p className={styles.subText}>
                                <span className={styles.textColor}>VoewCount : </span>
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