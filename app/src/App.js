import React from 'react';
import { connect } from 'react-redux'
import { fetchData } from './actions';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import Search from "./components/Search";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path ="/" component={Search} />
      {/* {props.isFetching && <p>Fetching Data...</p>}
      {!props.isFetching && props.results && <p>{props.results.title}</p>} */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    title: state.title,
    results: state.results,
    isFetching: state.isFetching,
  }
}
export default connect(mapStateToProps, {fetchData: fetchData})(App);
