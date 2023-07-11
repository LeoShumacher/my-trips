import { AppProps } from 'next/app'
import Head from 'next/head'

import GloblaStyles from '../../styles/global'

function App ({ Component, pageProps}: AppProps) {
    return 
    <>
    <Head>
        <title>React Avançado</title>
   
        <link rel="shortcut icon" href="public/favicon.ico" />   
        <link rel="shortcut icon" href="public/favicon.ico" />
        <meta
         name="description"
         content= "A simple project using TypeScript"
         />
        
    </Head>
    
    
    <Component {...pageProps} />
    </>
}
export default App