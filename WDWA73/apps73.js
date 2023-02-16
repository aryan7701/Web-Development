const express = require("express");
const path= require("path");
const app = express();
const port = 80;

//Static file serving=>
app.use(`/static`, express.static('static'));

//set the template engine
app.set("view engine",'pug')

//set the templates directory
app.set('views', path.join(__dirname, 'templates'))



app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});