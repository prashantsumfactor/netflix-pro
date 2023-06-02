import Image from "next/image";
import styles from './card.module.css'
import { useState } from "react";
import { motion } from "framer-motion";
import cls from "classnames";

const placeHolderImgUrl = 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80';

const Card = (props) => {

    const { id, imgUrl = placeHolderImgUrl, size = 'medium' } = props;
    const [imgSrc, setImgSrc] = useState(imgUrl);

    const handleOnError = () => {
        console.error('hi error');
        setImgSrc(placeHolderImgUrl);
    }

    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem,
    };

    const scale = (id === 0 ) ? {scaleY:1.1} : {scale:1.1};

    return (
        <div className={styles.container}>
            <motion.div className={cls(classMap[size], styles.imgMotionWrapper)} whileHover={{
                ...scale,
            }}>
                <Image
                    src={imgSrc}
                    alt="Image"
                    layout="fill"
                    className={styles.cardImg}
                    onError={handleOnError}
                />
            </motion.div>
        </div>
    );
}

export default Card;