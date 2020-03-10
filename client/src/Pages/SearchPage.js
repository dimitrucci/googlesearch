import React, { useState } from 'react';
import BookSearch from '../Components/BookSearch/BookSearch';
import SearchResults from '../Components/SearchResults/SearchResults';
import  books from 'google-books-search';

function SearchPage() {
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (query) => {
        books.search(query,(error,res)=>{
            if(error){
                console.log(error);
            }else {
                setSearchResults(res);
            }
        });
    }
    const handleSaveBook = (id) => {
        console.log('save book',id);
        const book = searchResults.find(book => book.id === id);
        if(book){
            //set the post to the backend
        const bookToSave = {
            id: book.id,
            title: book.title,
            subtitle: book.subtitle,
            authors: book.authors.join(' ,'),
            description: book.description,
            image: book.thumbnail,
            link: book.link
        }
        console.log('saving ...', bookToSave);
        fetch("http://localhost:3001/api/books",
            {
         headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
            },
            method: "POST",
        body: JSON.stringify(bookToSave)
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })
    }}
    return (
    <div>
        <BookSearch search={handleSearch} />
        <SearchResults searchResults={searchResults} saveBook={handleSaveBook} />
    </div>
    );
}
export default SearchPage;