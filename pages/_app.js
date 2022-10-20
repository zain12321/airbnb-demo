import ProgressBar from '@badrap/bar-of-progress'
import { Router } from 'next/router'
import '../styles/globals.css'

const progress = new ProgressBar({
  delay:100,
  className:"z-50",
  size:4,
  color:"#FE595E"
})

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
