import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner/banner';
import NavBar from '../components/nav/navbar';
import SectionCards from '../components/card/section-cards';
import { getVideos } from '../lib/videos';

export async function getServerSideProps() {
 
  const disneyVideos = await getVideos('disney trailer');

  const productivityVideos = await getVideos('productivity');

  const travelVideos = await getVideos('travel');

  const populerVideos = await getVideos('disney trailer');


  return { props : {disneyVideos, productivityVideos, travelVideos, populerVideos}};
}

export default function Home({
  disneyVideos,
  productivityVideos,
  travelVideos,
  populerVideos,
}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar userName="Prashant@sum.com" />
      <Banner
        title='Marvel Super Heros'
        subTitle='A powerful team'
        imgUrl='marvel.webp' />

      <div className={styles.sectionWrapper}>
        <SectionCards title='Disney' videos={disneyVideos} size='large' />
        <SectionCards title='Productivity' videos={productivityVideos} size='medium' />
        <SectionCards title='Travel' videos={travelVideos} size='medium' />
        <SectionCards title='Populer' videos={travelVideos} size='small' />
      </div>

    </div>
  );
}