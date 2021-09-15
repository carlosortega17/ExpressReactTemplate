const routes = require('express').Router();

routes.get('/all', (req, res)=>{
    let data = {
        username: "Root",
        password: "Toor"
    };
    res.json(data);
});

module.exports = routes;