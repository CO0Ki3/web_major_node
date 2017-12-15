const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req, res) => {
    console.log(req, res);
    let pathname = url.parse(req.url).pathname;

    console.log("Request for " + pathname + " received.");

    if(pathname=="/") {
        pathname = "index.html";
    }

    fs.readFile(pathname.substr(1), (err, data) => {
        if(err) {
            console.log(err);
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});

            res.write(data.toString());
        }
        res.end();
    });
}).listen({
    host: '127.0.0.1',
    port: 1234,
});

console.log('Server running at http://115.68.218.71:1234');

