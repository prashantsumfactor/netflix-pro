import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner/banner';
import NavBar from '../components/nav/navbar';
import Card from '../components/card/card';
import SectionCards from '../components/card/section-cards';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar userName="Prashant@sum.com" />
      <Banner
        title='Clifford the red dog'
        subTitle='a very cute dog'
        imgUrl='marvel.webp' />

      <div className={styles.sectionWrapper}>
        <SectionCards title='Disney' />
      </div>
    </div>
  );
}