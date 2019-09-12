import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions';
const Search = (props) => {
  return (
    <div>
      {props.isFetching && <p>Searching</p>}
      {!props.isFetching && props.results && 
        <div className="results-container">
          {props.results.map((query) => 
            <div key={query.title} className="search-card">
              <h2>{query.title}</h2>
              <p>Category: {query.location_type}</p>
              <p>Coordinates: {query.latt_long}</p>
            </div>  
          )}
        </div>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    results: state.results,
  }
}

export default connect(mapStateToProps, {fetchData: fetchData})(Search);