import Image from "next/image";
import styles from './card.module.css'
import { useState } from "react";

const Card = (props) => {

    const { imgUrl = '/marvel.webp', size = 'medium' } = props;
    const [imgSrc, setImgSrc] = useState(imgUrl);

    const handleOnError = () => {
        console.error('hi error');
        setImgSrc('/marvel.webp');
    }

    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem,
    };

    return (
        <div className={styles.container}>
            <p>Card</p>
            <div className={classMap[size]}>
                <Image
                    src={imgSrc}
                    alt="Image"
                    layout="fill"
                    className={styles.cardImg}
                    onError={handleOnError}
                />
            </div>
        </div>
    );
}

export default Card;