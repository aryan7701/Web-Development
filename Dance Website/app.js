const express = require("express");
const path = require("path");
const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ContactDance',{useNewUrlParser:true});
const bodyparser = require("body-parser");
const port = 8000;
//app.use(express.static('static',options))

//Define mongoose schema 
var ContactSchema = new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    address:String,
    desc:String
});

var Contact = mongoose.model('Contact',ContactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/ContactUs', (req, res)=>{
    const params = {}
    res.status(200).render('ContactUs.pug', params);
})

app.post('/ContactUs', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("Your response hase been saved,Please give us atleast two days to reply")
    }).catch(()=>{
        res.status(400).send("Your response has not been saved,Pleaset try again")
    });
    // res.status(200).render('ContactUs.pug');
})

// app.post('/About',(req,res)=>{
//     var myData = new About(req.body);
//     my
// })

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
// 4591 5601 0042 5214