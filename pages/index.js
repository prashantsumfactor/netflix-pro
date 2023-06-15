import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner/banner';
import NavBar from '../components/nav/navbar';
import SectionCards from '../components/card/section-cards';
import { getPopularVideo, getVideos } from '../lib/videos';

export async function getServerSideProps() {
  const disneyVideos = await getVideos('disney trailer');
  const productivityVideos = await getVideos('productivity');
  const travelVideos = await getVideos('travel');
  const popularVideos = await getPopularVideo();
  return { props: { disneyVideos, productivityVideos, travelVideos, popularVideos } };
}

export default function Home({
  disneyVideos,
  productivityVideos,
  travelVideos,
  popularVideos,
}) {
return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.main}>
        <NavBar userName="prashant@sumfactor.com" />
        <Banner
          videoId='iuk77TjvfmE'
          title='Marvel Super Heros'
          subTitle='A powerful team'
          imgUrl='marvel.webp' />

        <div className={styles.sectionWrapper}>
          <SectionCards title='Disney' videos={disneyVideos} size='large' />
          <SectionCards title='Travel' videos={travelVideos} size='small' />
          <SectionCards title='Productivity' videos={productivityVideos} size='medium' />
          <SectionCards title='Popular' videos={popularVideos} size='small' />
        </div>
      </div>
    </div>
  );
}