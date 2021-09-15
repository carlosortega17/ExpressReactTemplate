const routes = require('express').Router();

let fakeLogin = [];

routes.post('/login', (req, res) => {
    const { username, password } = req.body;
    let status = false;
    fakeLogin.forEach((usuario, index) => {
        if (usuario.username == username && usuario.password == password) {
            status = true;
        }
    });
    if (status)
        res.json({ message: "Ok", status: true });
    else
        res.json({ message: "Username or password", status: false });
});

routes.post('/register', (req, res) => {
    const { username, password } = req.body;
    let status = false;
    fakeLogin.forEach((usuario, index) => {
        if (usuario.username == username && usuario.password == password) {
            status = true;
        }
    });
    if (username !== undefined && password !== undefined && !status) {
        fakeLogin.push({
            username: username,
            password: password
        })
        console.log(fakeLogin);
        res.json({ message: "User append", status: true });
    }
    else {
        res.json({ message: "Username or password empty or duplicate", status: false });
    }
});

module.exports = routes;