import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { resetState } from '../actions';

const Home = (props) => {
  useEffect(() => {
    props.resetState();
  }, [])
  return (
    <div className="home">
      <h1>WEATHER FINDER</h1>
      <p>This is the weather app by Jordan. You can search for cities and then view their weather. Stay tuned...</p>
    </div>
  )
}

export default connect(null, {resetState: resetState})(Home);