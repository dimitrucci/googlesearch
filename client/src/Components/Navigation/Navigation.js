import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import './Navigation.css';

const Navigation = ({history}) =>{
return (
    <div className="navigation">
      <div className="link-item">
        Google Books
      </div>
      <div className="link-item" onClick={()=>history.push('/search')}>
      <p>Search</p>
      </div>
      <div className="link-item" onClick={()=>history.push('/saved')}>
        <p>Saved</p>
      </div>
      <hr />
  </div>);
}

export default withRouter(Navigation);