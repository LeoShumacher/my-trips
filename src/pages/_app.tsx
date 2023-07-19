import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

 import GlobalStyles from '@/styles/global' 

function App ({ Component, pageProps}: AppProps) {
    return (
    <>
    <Head>
        
        <link rel="shortcut icon" href="public/favicon.ico" />   
        <link rel="shortcut icon" href="public/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""/>
        
    </Head>

        <DefaultSeo {...SEO} />
        
        <GlobalStyles />

        <NextNProgress color="var(--highlight)"
         startPosition={0.3}
          stopDelayMs={200}
           height={3}
            showOnShallow={true} />

    <Component {...pageProps} />
    </>
    )}

export default App