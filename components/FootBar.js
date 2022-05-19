import React from 'react'
import styles from '../styles/FootBar.module.css' 

function FootBar() {
  return (
    <>
    <div className={styles.footer}>
      <div className={styles.container}>  
        <div className={styles.row}>

          <div className={styles.col}>
            <div className={styles.alignLogo}>
                <p className={styles.textCopyright}>&#169; Copyright 2022 MetaverseXR</p>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.alignTextCopyright}>
                <p className={styles.logo}>Logo</p>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.rowIcon}>
              <div className={styles.colIcon}>
                <img src='images/facebook.svg' className={styles.iconSocial} />
              </div>
              <div className={styles.colIcon}>
                <img src='images/telegram.svg' className={styles.iconSocial} />
              </div>
              <div className={styles.colIcon}>
                <img src='images/line.svg' className={styles.iconSocial} />
              </div>
              <div className={styles.colIcon}>
                <img src='images/discord.svg' className={styles.iconSocial} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FootBar