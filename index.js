require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const overry = require('method-override');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(overry('_method')); // Override forms methods with _method="PUT" or any thing
app.use(session({
    secret: "software-templates",
    resave: false,
    saveUninitialized: true
}));

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// Routes
//app.use(require('./routes/home'));
// Test api
app.use('/api/test', require('./routes/api/test'));

// Global
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, ()=>{
    
});