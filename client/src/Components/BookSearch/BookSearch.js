import React, { useState } from 'react';
import './BookSearch.css';

function BookSearch({search}) {
    const [query, setQuery] = useState('');
    const handleSearch = ()=> {
        search(query);
    }
    const handleKeyDown = (event) => {
        if (event.keyCode == 13) {
            search(query)
        }
    }
    return (
    <div className="book-search">
    <h2>Book Search</h2>
    <p>book</p>
    <input type="text" value={query} placeholder="Search..." onChange={(event)=> setQuery(event.target.value)} onKeyDown={handleKeyDown} />
    <div className="button-container">
    <button onClick={handleSearch}>Search</button>
    </div>
    </div>
    );
}
export default BookSearch;