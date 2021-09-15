const routes = require('express').Router();
// To render React Component

routes.get('/', (req, res)=>{
    res.render('Home');
});

module.exports = routes;