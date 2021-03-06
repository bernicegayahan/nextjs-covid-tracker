import Head from 'next/head'
import { Jumbotron } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>COVID Tracker App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Jumbotron fluid className="jumbo">

      </Jumbotron>

      {/* create your dashboard by providing the design, theme and content */}
    </div>
  )
}
