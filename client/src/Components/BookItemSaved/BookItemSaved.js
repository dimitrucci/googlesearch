import React from 'react';
import './BookItemSaved.css';

function BookItemSaved({id, title, authors, description, image, link, deleteBook, subtitle}) {
    return (
    <div className="book-item-saved">
    <div className="top-infos">
    <div className="title-author">
    <h5>{title}</h5>
    <p>{subtitle}</p>
    <p>written by : {authors}</p>

    </div>
    <div className="buttons">
        <a href={link} target='_blank'><button>View</button></a>
        <button onClick={()=>deleteBook(id)}>Delete</button> 
    </div>
    </div>
    <div className="bottom-infos">
       <img alt="book cover" src={image} />
    <p>{description}</p>
    </div>
    </div>
    );
}
export default BookItemSaved;