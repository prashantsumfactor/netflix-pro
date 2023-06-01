import Card from "./card";
import styles from './section-cards.module.css'

const SectionCards = (props) => {

    const { title } = props;

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                <Card id={0} imgUrl='/marvel.webp' size="large" />
                <Card id={1} imgUrl='/marvel.webp' size="large" />
                <Card id={2} imgUrl='/marvel.webp' size="large" />
                <Card id={3} imgUrl='/marvel.webp' size="large" />
                <Card id={4} imgUrl='/marvel.webp' size="large" />
            </div>
        </section>
    );
}

export default SectionCards;