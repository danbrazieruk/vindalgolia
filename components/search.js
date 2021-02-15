
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  SortBy,
} from 'react-instantsearch-dom';
import styles from '../styles/Home.module.css'


const searchClient = algoliasearch(
  "NW3SOQ6MJB",
  "902bd16990e59ef071a25e10e1bb7068"
);


{/* Search */}
function Search() {

    return (
        <InstantSearch searchClient={searchClient} indexName="bordeaux">

            <Header />

            <Content/>


        </InstantSearch >
    );
};


{/* Header */}
const Header = () => (
    <header className="header">

      <h1 className={styles.title}>
        Vin d'Algolia
      </h1>

      <p className={styles.description}>
        Wine without the whine.
      </p>

      <SearchBox
          className="search-bar"
          translations={{ placeholder: 'Search for Wine' }}
      />
    </header>
);


{/* Hit */}
const Hit = ({ hit }) => (
    <a href={"/"} >
        <div className="card">
            <div className="card-image">
                <img src={hit.image} alt={hit.name} className="image"/>
            </div>
            <div className="card-contents">

                <Highlight attribute="name" hit={hit} className="card-title" />
                <Highlight attribute="year" hit={hit}  className="card-year"/>
                <div className="card-rating">Rating: {hit.quality}</div>
                <div className="card-type">Rating: {hit.type}</div>
            </div>
        </div>
    </a>
);


{/* Content */}
const Content = () => (
    <main className={styles.main}>
        <div className="information">
            <div className="">

                <SortBy defaultRefinement="quality"
                    items={[
                        { value: 'quality', label: 'Most Relevant' },
                    ]}
                />

            </div>
        </div>

        <Hits hitComponent = {Hit} />

        <div>
          <Pagination/>
        </div>
    </main>
);

export default Search;
