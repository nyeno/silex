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
      </Head>

      <main className={styles.main}>
        <Header />
        <Main />
        <Footer />
      </main>
      <Cookies />
    </div>
  );
}
