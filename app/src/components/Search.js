import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions';
const Search = (props) => {
  return (
    <div>
      {props.isFetching && <p>Searching</p>}
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