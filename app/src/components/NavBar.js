import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchData } from '../actions';

const NavBar = (props) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSubmit = () => {
    props.fetchData(`/search/?query=${query}`)
    setQuery("");
  }

  return (
    <div className="navigation">
        <Link to ="/"><p className="header-title">Weather Finder</p></Link>
        <input type="text" value={query} onChange={(e) => handleChange(e)}/>
        <Link to="/search"><button onClick={handleSubmit}>Search</button></Link>
    </div>
  )
}

export default connect(null, {fetchData: fetchData})(NavBar);