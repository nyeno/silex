import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'
import Cookies from '../components/Cookies'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SILEX. rock. solid</title>
        <meta name="description" content="Silex frontend test by Nyenooke" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <Main />
      </main>
      <Footer />
      <Cookies />
    </div>
  );
}
