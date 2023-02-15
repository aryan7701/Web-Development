const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const Home1 = fs.readFileSync('Home1.html');
const About1 = fs.readFileSync('./About1.html');
const Contact1 = fs.readFileSync('./Contact1.html');
const Centres1 = fs.readFileSync('./Centres1.html');

const server = http.createServer((req, res) => {
    console.log(req.url)
    url = req.url;


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (url == `/`) {
        res.end(Home1);
    } else if (url == `/About1`) {
        res.end(About1);
    } else if (url == `/Centres1`) {
        res.end(Centres1);
    } else if (url == `/Contact1`) {
        res.end(Contact1);
    } else {
        res.statusCode = 404;
        res.end("<h1>404 Page not found</h1>")
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});