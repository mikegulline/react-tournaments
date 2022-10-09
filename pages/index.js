import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Tournaments</title>
        <meta
          name='description'
          content='Next JS React App for Single and Double Elimination Tournament Brackets'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>React Tournaments</h1>
      </main>

      <footer className={styles.footer}>
        <a href='https://gulline.com' target='_blank' rel='noopener noreferrer'>
          by Mike Gulline
        </a>
      </footer>
    </div>
  );
}
