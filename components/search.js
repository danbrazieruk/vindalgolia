
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  SearchBox,
  Hits,
  HitsPerPage,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  SortBy,
  Panel,
} from 'react-instantsearch-dom';


const searchClient = algoliasearch(
  "NW3SOQ6MJB",
  "902bd16990e59ef071a25e10e1bb7068"
);


{/* Search */}
function Search() {

    return (
        <InstantSearch searchClient={searchClient} indexName="bordeaux">

            <Header/>

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
          translations={{ placeholder: 'Search Wines' }}
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
        <p className="small uppercase letter-spacing">{hit.domain}</p>
        <p className="card-title">{hit.name} <span className="card-year">{hit.year}</span></p>

        <div className="card-price" hit={hit}>€ {hit.price}</div>
        <div className="card-rating">Rating: {hit.quality}</div>
    </div>
  </div>
);


{/* Content */}
const Content = () => (
  <main className="main">

    {/* Filters */}
    <div className="container container--filters">
      <h3>Filters</h3>

      <div className="clear-filters">
        <ClearRefinements
          translations={{
            reset: (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                >
                  <g fill="none" fillRule="evenodd" opacity=".4">
                    <path d="M0 0h11v11H0z" />
                    <path
                      fill="#000"
                      fillRule="nonzero"
                      d="M8.26 2.75a3.896 3.896 0 1 0 1.102 3.262l.007-.056a.49.49 0 0 1 .485-.456c.253 0 .451.206.437.457 0 0 .012-.109-.006.061a4.813 4.813 0 1 1-1.348-3.887v-.987a.458.458 0 1 1 .917.002v2.062a.459.459 0 0 1-.459.459H7.334a.458.458 0 1 1-.002-.917h.928z"
                    />
                  </g>
                </svg>
                Clear filters
              </>
            ),
          }}
        />
      </div>

      <div className="">
        <Panel className="small uppercase letter-spacing" header="Region">
          <RefinementList
            attribute="domain"
            searchable={true}
            translations={{
              placeholder: 'Search Regions…',
            }}
          />
        </Panel>
      </div>
    </div>


    {/* Results */}
    <div className="container container--results">

      <SortBy
        className="container-option"
        defaultRefinement="price-desc"
        items={[
          {
            label: 'Price (low to high))',
            value: 'price-asc',
          },
          {
            label: 'Price (high to low)',
            value: 'price-desc',
          },
          {
            label: 'Year (low to high))',
            value: 'year-asc',
          },
          {
            label: 'Year (high to low)',
            value: 'year-desc',
          },
        ]}
      />

      <HitsPerPage
        className="container-option"
        items={[
          {
            label: '12 items per page',
            value: 12,
          },
          {
            label: '18 items per page',
            value: 18,
          },
          {
            label: '24 items per page',
            value: 24,
          },
        ]}
        defaultRefinement={12}
      />

      <Hits hitComponent = {Hit} />

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

    </div>

  </main>
);

export default Search;
