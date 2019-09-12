import React from 'react';
import { connect } from 'react-redux'
import { fetchData } from './actions';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Location from './components/Location';

import './App.css';

const App = () => {
  return (
    <div>
      <Route path ="/" component={NavBar} />
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path ="/search" component={Search} />
        <Route path ="/location" component={Location} />
      </div>
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
