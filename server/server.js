'use strict'

const http = require("http")
const fs = require("fs")
const url = require("url")
const path = require("path")
const port = 3500;
// const queries = require("./database/dbqueries.js")

let server = http.createServer(function(req, res) {
    let uri = url.parse(req.url).pathname
    let pathname = path.join(process.cwd(), uri);

    const extmap = {
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.pdf': 'application/pdf',
        '.doc': 'application/msword'
    };

    if(req.url.match('/database/userinput') && req.method == "POST") {
        let userdata = ""
        req.on('error', (err) => { consol.error(err) })
        req.on('data', (buffer) => { userdata += buffer.toString() })
        req.on('end', () => {
            let parsedInput = userdata ? JSON.parse(userdata) : ""
            queries.addData(parsedInput, () => { 
                res.end()    
            })
        });

    }
    else if(req.url.match('/database/getAllData') && req.method == "GET") {
        req.on('error', (err) => { consol.error(err) })
        req.on('end', () => {
            queries.showAll( () => { res.end() })
        });
    }

    else {
        if (uri == '/') { pathname += '/public/index.html'; }
        let exists = fs.existsSync(pathname)

        if(!exists) {
            let path = process.cwd()
            path += '/public/index.html';
    
            fs.readFile(path, function(err, file) {
                if(err) { return console.log('Error reading file...', err); }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(file);
            })
            return;
        }
        fs.readFile(pathname, function(err, file) {
            if(err) { return console.log('Error reading file...', err); }
            let ext = path.parse(pathname).ext;
            res.writeHead(200, {'Content-type': extmap[ext] || 'text/plain'});
            res.end(file);
        })
    }

     
}).listen(port)

console.log(`Server listening on port ${port}`)