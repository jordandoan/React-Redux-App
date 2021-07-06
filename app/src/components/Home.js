import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { resetState } from '../actions';

const Home = (props) => {
  useEffect(() => {
    props.resetState();
  }, [])
  return (
    <div className="home">
      <h1>Find Your Forecast</h1>
      <p>Weather app powered by Metaweather's API. Created by Jordan.</p>
    </div>
  )
}

export default connect(null, {resetState: resetState})(Home);