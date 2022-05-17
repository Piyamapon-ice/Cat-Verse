import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Verse</title>
        <meta name="description" content="Cat Metaverse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div> 
        <div className={styles.section}>
          <img src='images/CatVerse02.jpg' className={styles.banner} />
        </div>
        <div className={styles.section}>
          <img src='images/NftShop.png' className={styles.banner}  />
        </div>
        <div className={styles.section}>
          <img src='images/MaskGroup.png' className={styles.banner}  />
        </div>
        <div className={styles.section}>
          <img src='images/CtaSignUp.png' className={styles.banner}  />
        </div>
      </div>
    </>
  )
}
