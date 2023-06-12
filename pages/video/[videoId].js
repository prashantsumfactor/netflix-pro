import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from '../../styles/Video.module.css'

Modal.setAppElement('#__next');


const Video = () => {
    const router = useRouter();
    return (
        <div>video id {router.query.videoId}
            <Modal
                isOpen={true}
                onRequestClose={()=> router.back()}
                style={styles.overlay}
                contentLabel="Example Modal">
                <div>I am a modal</div>
            </Modal>
        </div>
    );
}

export default Video;