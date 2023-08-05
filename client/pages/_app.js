import '@/styles/globals.css'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import Footer from '@/components/Footer/Footer';
import 'remixicon/fonts/remixicon.css';


export default function App({ Component, pageProps }) {
  return  <>
  
     <Head>
        <link rel="stylesheet" href="https://cdn.example.com/styles.css" />
      </Head >
  <div className=' h-full flex-col overflow-x-hidden'>
  <Header/> <Component {...pageProps} /> <Footer/>
  </div>
  </>
}
