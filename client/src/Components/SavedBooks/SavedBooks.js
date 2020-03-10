import React, { useState, useEffect } from 'react';
import BookItemSaved from '../BookItemSaved/BookItemSaved'
import './SavedBooks.css';

function SavedBooks() {
    const [books, setBooks] = useState([]);
    console.log(books);
    useEffect(()=>{
        fetch('http://localhost:3001/api/books')
        .then(function(response) {
        return response.json();
        })
        .then(function(books) {
            setBooks(books);
        })
    },[]);
    const handleDeleteBook = (id)=>{
        fetch(`http://localhost:3001/api/books/${id}`, {
        method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => {
            const index = books.findIndex(book => book.id === res.id);
            books.splice(index, 1);
            setBooks([...books]);
        })
    }
    return (
    <div className="saved-books">
        <h5>Saved books</h5>
        {books.map(book => <BookItemSaved 
                                key={book.id || ''} 
                                id={book.id || ''}
                                title={book.title || ''} 
                                subtitle={book.subtitle || ''}
                                authors={book.authors || ''} 
                                description={book.description || ''}
                                image={book.image || ''}
                                link={book.link || ''}
                                deleteBook={handleDeleteBook}
                                />)}
        {books.length === 0 ? 'Sorry you have no saved books': null}
    </div>
    );
}
export default SavedBooks;