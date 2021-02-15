import Head from 'next/head'
import Search from '../components/Search.js'
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
        by&nbsp;<a href="http://danbrazier.co.uk" target="_blank" rel="nofollow">danbrazier</a>
      </footer>
    </div>
  )
}
