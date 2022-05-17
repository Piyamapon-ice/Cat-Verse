import React from 'react'
import style from '../styles/globals.css'
import NavBar from '../components/NavBar'
import FootBar from '../components/FootBar'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <NavBar />
    <Component {...pageProps} />
    <FootBar />
    </>
  ) 
}

export default MyApp
