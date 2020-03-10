import React from 'react';
import './BookItemSearchResults.css';

function BookItemSearchResults({id, title, description, authors, link, thumbnail, subtitle, saveBook}) {

    return (
    <div className="book-item-search-results">
    <div className="top-infos">
    <div className="title-author">
    <h5>{title}</h5>
    <p>{subtitle}</p>
    <p>writen by {authors.join(', ')}</p>
    </div>
    <div className="buttons">
        <a href={link} target='_blank'><button>View</button></a>
        <button onClick={()=> saveBook(id)}>Save</button> 
    </div>
    </div>
    <div className="bottom-infos">
        <img alt="book cover" src={thumbnail} />
       <p>{description}</p>
    </div>
    </div>
    );
}
export default BookItemSearchResults;