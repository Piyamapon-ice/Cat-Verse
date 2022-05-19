import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { MdPlayCircleFilled } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Verse</title>
        <meta name="description" content="Cat Metaverse" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>

      <div> 
        {/* section Banner */}
        <div className={styles.section}>
          <div className={styles.textover}>
          <img src='images/CatVerse02.jpg' className={styles.banner} />
          <div className={styles.DivBtnBanner}>
              <button className={styles.btnBanner}>
                <Link href='/login'><p className={styles.TextBtn}>Join Now</p></Link>
              </button>
            </div>
          </div>
        </div>

        {/* section NFT */}
        <div className={styles.section}>
          <div className={styles.textover}>
            <img src='images/NftShop.png' className={styles.banner}  />
            <p className={styles.headingNft}>EXPLORE NFT SHOP</p>
            <div className={styles.DivBtnExplore}>
              <button className={styles.btnExplore}>
                <Link href='/explore' className={styles.TextBtn}>EXPLORE</Link>
            </button>
            </div>
          </div>
        </div>

        {/* section Meaning */}
        <div className={styles.section}>
          <div className={styles.textover}>
            <img src='images/About.jpg' className={styles.banner}  />
            <p className={styles.headingMeaning}>what is cat verse?</p>
            <p className={styles.titleMeaning}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium laborum quas accusamus impedit ipsam deserunt odit ratione minima sed sapiente dolorum voluptates doloremque, aliquam nihil atque ab quis nisi repudiandae.</p>
          </div>
        </div>

        {/* section Video */}
        <div className={styles.video}> <MdPlayCircleFilled className={styles.videoIcon} /> </div>

        {/* section Interact */}
        <div className={styles.section}>
          <div className={styles.textover}>
            <img src='images/MaskGroup.png' className={styles.banner} />
            <p className={styles.headingInteract}>Ways to interact</p>

          <div className={styles.divInteract}>
            <div className={styles.flexbox}>
              <div className={styles.item}>
                <div className={styles.content}>
                  <img src='images/chatIcon.png' className={styles.chatIcon} />
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.content}>
                  <img src='images/emojiIcon.png' className={styles.emojiIcon} />
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.content}>
                  <img src='images/eyeIcon.png' className={styles.eyeIcon} /> 
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>

        {/* <div className={styles.section}>
          <div className={styles.textover}>
            <img src='images/MaskGroup.png' className={styles.banner} />
            <p className={styles.headingInteract}>Ways to interact</p>

            <div className={styles.boxIcon}>
              <div className={styles.container}>
                <div className={styles.row}>

                  <div className={styles.col}>
                    <div className={styles.colItem}>
                      <div className={styles.borderBox}>
                      <div className={styles.box}>
                        <img src='images/chatIcon.png' className={styles.chatIcon} />
                      </div>
                      </div>
                      <div className={styles.boxSubHeadingInteract}>
                        <p className={styles.subheadingInteract}>CHAT</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.col}>
                  <div className={styles.colItem}>
                    <div className={styles.borderBox}>
                      <div className={styles.box}>
                        <img src='images/emojiIcon.png' className={styles.emojiIcon} />
                      </div>
                    </div>
                      <div className={styles.boxSubHeadingInteract}>
                      <p className={styles.subheadingInteract}>VIRTUAL EXPRESSIONS</p>
                      </div> 
                    </div>
                  </div>

                  <div className={styles.col}>
                    <div className={styles.colItem}>
                    <div className={styles.borderBox}>
                      <div className={styles.box}>
                        <img src='images/eyeIcon.png' className={styles.eyeIcon} />
                      </div>
                    </div>
                      <div className={styles.boxSubHeadingInteract}> 
                      <p className={styles.subheadingInteract}>SURVEY</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                <p className={styles.titileInteract}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, adipisci? Exercitationem eius voluptatum assumenda velit voluptate sapiente nam quaerat sit architecto! Officia excepturi ab accusamus soluta corrupti velit? Labore, odio?</p>
                
          </div>
        </div> */}

        {/* section Join */}
        <div className={styles.section}>
        <div className={styles.textover}>
          <img src='images/CtaSignUp.png' className={styles.banner} />
          <p className={styles.headingJoin}>join the interactive experience</p>
          <p className={styles.LogoJoin}> LOGO </p>
          <div className={styles.DivBtnJoin}>
            <button className={styles.btnExplore}>
              <Link href='/signUp' className={styles.TextBtn}>SIGN UP</Link>
            </button>
          </div>
        </div>
        </div>
      </div>

    </>
  )
}
