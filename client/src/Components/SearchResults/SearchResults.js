import React from 'react';
import BookItemSearchResults from '../BookItemSearchResults/BookItemSearchResults';
import './SearchResults.css';

function SearchResults({searchResults, saveBook}) {
    return (
    <div className="search-results">
        <h5>Results</h5>
        {searchResults && searchResults.length >0 ?
        searchResults.map((book) => <BookItemSearchResults key={book.id} title={book.title || ''} description={book.description || ''} authors={book.authors || []} id={book.id || ''} link={book.link || ''} thumbnail={book.thumbnail || ''} subtitle={book.subtitle || ''} saveBook={saveBook}/>)
        :null
        }
    </div>
    );
}
export default SearchResults;