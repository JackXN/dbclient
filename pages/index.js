import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



//components
import Navbar from '../components/containers/Navbar/Navbar';
import Hero from '../components/containers/Hero/index';
import {Box} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
<Head>
  <title>Welcome Jack</title>

  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"/>



</Head>

<Box style={{background: '#FF6568', height: '100vh', padding: '20px'}}>
<Navbar/>
<Box>
<Hero/>
</Box>





</Box>

  </>
  )
}
