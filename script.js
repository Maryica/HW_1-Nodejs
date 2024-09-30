const http = require('http');
let counter = 0;
let counterAbout = 0;
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF8'
        });
        res.end(`
            <h1>Main</h1>
            <a href="/about">Аbout</a>
            <p>Number of views ${counter}</p>
        `);
        counter++;
    }
    else if (req.url === '/about') {

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF8'
        });
        res.end(`
            <h1>About</h1>
            <a href="/">Main</a>
            <p>Number of views ${counterAbout}</p>
        `);
        counterAbout++;
    }
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF8'
        });
        res.end('<h1>Error!</h1>');
    }
});

const port = '3000';
server.listen(port);