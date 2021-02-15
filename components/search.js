
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Hits,
  HitsPerPage,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  SortBy,
} from 'react-instantsearch-dom';


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

      <h1 className="title">
        Vin d'Algolia
      </h1>

      <p className="description">
        Find wine sans whine.
      </p>

      <SearchBox
          className="search-bar"
          translations={{ placeholder: 'Search for Wine' }}
      />
    </header>
);


{/* Hit */}
const Hit = ({ hit }) => (
  <div className="card">

    <div className="card-image">
        <img src={hit.image} alt={hit.name} className="image"/>
    </div>

    <div className="card-body">
        <p className="small uppercase">{hit.domain}</p>
        <p className="card-title">{hit.name} <span className="card-year">{hit.year}</span></p>

        <div className="card-price" hit={hit}>€ {hit.price}</div>
        <div className="card-rating">Rating: {hit.quality}</div>
    </div>
  </div>
);


{/* Content */}
const Content = () => (
    <main className="main">
      <div className="container">

      <HitsPerPage
            className="container-option"
            items={[
              {
                label: '12 hits per page',
                value: 12,
              },
              {
                label: '18 hits per page',
                value: 18,
              },
              {
                label: '24 hits per page',
                value: 24,
              },
            ]}
            defaultRefinement={12}
          />

        <Hits hitComponent = {Hit} />
      </div>

      <Pagination
              padding={2}
              showFirst={false}
              showLast={false}
              translations={{
                previous: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.143"
                    >
                      <path d="M9 5H1M5 9L1 5l4-4" />
                    </g>
                  </svg>
                ),
                next: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.143"
                    >
                      <path d="M1 5h8M5 9l4-4-4-4" />
                    </g>
                  </svg>
                ),
              }}
            />

    </main>
);

export default Search;
