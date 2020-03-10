const express = require("express");
var cors = require("cors");
const db = require("./models");
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3001;
const books = [
  
];
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/googlebooks", function(err, dbo) {
  if (err) throw err;
  googlebooks = dbo;
  dbo.collection("books").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result.length,'item found in db');
    result.forEach(book => {
      books.push(book);
    });
  });
}); 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/api/books', function(req, res){
res.send(books);
})
app.post('/api/books', function(req, res){
const bookToSave = {
  id: req.body.id,
  title: req.body.title,
  subtitle: req.body.subtitle,
  authors: req.body.authors,
  description: req.body.description,
  image: req.body.image,
  link: req.body.link
}
if(!books.find(book => book.id == req.body.id)){
  books.push(bookToSave);
  db.Book.collection.insertOne(bookToSave)
  .then(data => {
    console.log(" records inserted!");
  })
  .catch(err => {
    console.error(err);
  });
}
res.send({id : req.body.id});
});
app.delete('/api/books/:id', function(req, res){
  const id = req.params.id;
  const index = books.findIndex(book => book.id === id);
  if(index !== -1){
    books.splice(index, 1);
    db.Book.collection.deleteOne({id: id});
    res.send({id: id});
}
});

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
