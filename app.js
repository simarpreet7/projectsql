var express=require('express')
var app=express();
//sam
var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

///for post req
app.set("view engine", "ejs");
const routes = require('./routes/api').route,
 
path = require("path");
app.use("/public", express.static("public"));
//using ejs
app.get('/', (r, s) => s.send('Hello'))
app.use('/table', routes)
app.listen(1000);