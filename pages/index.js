import Head from 'next/head'
import Search from '../components/Search'
import algoliasearch from 'algoliasearch/lite'
import { withInstantSearch } from "next-instantsearch";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from "react-instantsearch-dom";


export default function Home() {
  return (

    <div className="container">

      <Head>
        <title>Vin d'Algolia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search />

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}
