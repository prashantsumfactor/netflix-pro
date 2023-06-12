import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from '../../styles/Video.module.css'

Modal.setAppElement('#__next');


const Video = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>video id {router.query.videoId}
            <Modal
                isOpen={true}
                onRequestClose={() => router.back()}
                style={styles.overlay}
                className={styles.modal}
                contentLabel="Example Modal">
                <iframe
                    id="ytplayer"
                    width="640"
                    height="360"
                    src="http://www.youtube.com/embed/iuk77TjvfmE?autoplay=1&cc_load_policy=1&controls=0&rel=1"
                    frameborder="0"
                    allowfullscreen>
                </iframe>            
            </Modal>
        </div>
    );
}

export default Video;