import '../styles/globals.css'
import "../styles/js_composer.min.css"
import "../styles/load-styles.css" 
import "../styles/one.css" 
import "../styles/two.css" 

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
