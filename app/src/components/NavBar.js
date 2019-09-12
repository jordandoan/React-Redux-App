import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions';

const NavBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (props) => {
    props.fetchData(`/search/?query=${query}`)
    setQuery("");
    props.history.push("/search");
  }
  return (
    <div className="navigation">
        <p className="header-title">Weather Finder</p>
        <input type="text" value={query} onChange={(e) => handleChange(e)}/>
        <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default connect(null, {fetchData: fetchData})(NavBar);