import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ScholarAI</title>
        <meta name="description" content="Created by Richard Trinh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.description}>
          <div>
          </div>
        </div>

        <div className={styles.center}>
  
        </div>

        <div className={styles.grid}>

        </div>
      </main>
    </>
  )
}
