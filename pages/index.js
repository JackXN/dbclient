import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



//components
import Navbar from '../components/containers/Navbar/Navbar';

export default function Home() {
  return (
    <>
<Head>
  <title>Welcome Jack</title>
</Head>
<Navbar/>
    <div>
      hello
    </div>
  </>
  )
}
