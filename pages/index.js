import Head from 'next/head'
import Search from '../components/Search'

export default function Home() {
  return (

    <div className="container">

      <Head>
        <title>Vin d'Algolia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search />

      <footer className="footer">
        by&nbsp;<a href="http://danbrazier.co.uk" target="_blank" rel="nofollow">danbrazier</a>
      </footer>
    </div>
  )
}
