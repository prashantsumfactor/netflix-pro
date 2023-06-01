import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner/banner';
import NavBar from '../components/nav/navbar';
import SectionCards from '../components/card/section-cards';
import { getVideos } from '../lib/videos';

export default function Home() {

  const disneyVideos1 = [
    {
      imgUrl : '/marvel.webp',
    },
    {
      imgUrl : '/marvel.webp',
    },
    {
      imgUrl : '/marvel.webp',
    },
    {
      imgUrl : '/marvel.webp',
    },
  ]

  const disneyVideos = getVideos();

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
        <SectionCards title='Cartoon' videos={disneyVideos} size='medium' />
      </div>

    </div>
  );
}