'use strict'

const http = require("http")
const fs = require("fs")
const url = require("url")
const path = require("path")
const port = 3500;
const queries = require("../database/queries.js")

http.createServer(function(req, res) {
    let uri = url.parse(req.url).pathname
    let pathname = path.join(__dirname+"/../public", uri);

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

    if(req.url.match('/add-new-item') && req.method == "POST") {
        console.log("Adding new item test");
        let data = ""
        req.on('error', (err) => { consol.error(err) })
        req.on('data', (buffer) => { data += buffer.toString() })
        req.on('end', () => {
            try {
                let parsedInput = data ? JSON.parse(data) : ""
                queries.addData(parsedInput, () => { res.end() })
            } 
            catch(err) {
                console.error(err.message)
            }

        });
    }
    else if(req.url.match('/sold-item/status') && req.method == "POST") {
        console.log("Adding sold status");
        let data = ""
        req.on('error', (err) => { consol.error(err) })
        req.on('data', (buffer) => { data += buffer.toString() })
        req.on('end', () => {
            try {
                let parsedInput = data ? JSON.parse(data) : ""
                queries.soldStatus(parsedInput, (err, result) => { res.end(result) })
            } 
            catch(err) {
                console.error(err.message)
            }

        });
    }
    else if(req.url.match('/remove-listing') && req.method == "POST") {
        console.log("Adding sold status");
        let data = ""
        req.on('error', (err) => { consol.error(err) })
        req.on('data', (buffer) => { data += buffer.toString() })
        req.on('end', () => {
            try {
                let parsedInput = data ? JSON.parse(data) : ""
                queries.removeListing(parsedInput, (err, result) => { res.end(result) })
            } 
            catch(err) {
                console.error(err.message)
            }

        });
    }
    else if(req.url.match('/view-inventory') && req.method == "GET") {
        req.on('error', (err) => { console.error(err) })
        let data = "";
        req.on('data', (chunk) => { data += chunk})
        req.on('end', () => {
            try {
                queries.showAll(data, (err, result) => { res.end(result) })
              } 
              catch (err) {
                console.error(err.message);
              }
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