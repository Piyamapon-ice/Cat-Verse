import React from 'react'
import Head from 'next/head'
import styles from '../styles/login.module.css'
import Link from 'next/link'
import { MdPerson , MdLock } from "react-icons/md";

function login() {
  return (
    <>
      <Head>
          <title>Login</title>
          <meta name="description" content="Cat Metaverse" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>
    <div className={styles.body}>
      <div className={styles.container}>
          <div className={styles.form}>
              <div className={styles.formLogin}></div>
              <span className={styles.title}>User login</span>

              <form action="#">
                <div className={styles.inputField}>
                  <input type="text" placeholder='Username' required />
                  <i> <MdPerson /> </i>
                </div>

                <div className={styles.inputField}>
                  <input type="password" placeholder='Password' required />
                  <i> <MdLock /> </i>
                </div>

                <div className={styles.divText}>
                  <Link href='/login' className={styles.textForgot}>Forgot password ?</Link>
                </div>

                <div className={styles.DivBtnLogin}>
                  <button className={styles.btnLogin}>
                    <Link href='/signUp'>LOGIN</Link>
                  </button>
                </div>

              </form>

              <div className={styles.divOr}>
              <p className={styles.textOR}><span>or sign in with</span></p>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                <img src='images/Google_icon.png' className={styles.icon} />
                </div>
                <div className={styles.col}>
                <img src='images/facebook_icon.png' className={styles.icon} />
                </div>
              </div>

              <div className={styles.divSignUp}>
                <p className={styles.textSignUp}>Don't have an account yet</p>
                <p className={styles.textRegister}>
                <Link href='/register' >Register Now</Link>
                </p>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default login