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
        <p><Link to ="/" className="header-title">Forecast Finder</Link></p>
        <div>
          <input placeholder="Search City" type="text" value={query} onChange={(e) => handleChange(e)}/>
          <Link to="/search"><button onClick={handleSubmit}>Search</button></Link>
        </div>
    </div>
  )
}

export default connect(null, {fetchData: fetchData})(NavBar);