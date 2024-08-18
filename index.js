const express = require("express");
const app = express();
const cors = require("cors");
const popularbooks = require("./booksinfo");
const books = require("./books")
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.listen(3000,()=>{
    console.log("Listning on 3000");
});
app.get("/",(req,res)=>{
    res.json({success:"Working"}).status(200);
})
app.post("/getpopular",(req,res)=>{
    res.send(popularbooks).status(200);
})
app.post("/books",(req,res)=>{
    res.send(books).status(200);
})