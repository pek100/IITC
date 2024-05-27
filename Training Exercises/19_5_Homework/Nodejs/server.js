const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3050;

const LaptopHTML = __dirname + '/laptop_store_start/laptop.html';
const overviewHTML = __dirname + '/laptop_store_start/overview.html';
const overviewJson = __dirname + '/laptop_store_start/data/data.json';



// req - request - הבקשה של הדפדפן
// res - response - התגובה של השרת



// HTTP codes: 200 - OK, 404 - File Not Found, 500 - Server Error
const server = http.createServer((req, res) => {

    console.log(req.url);
    // ROUTER
    switch (req.url) {
        case '/laptop':
            fs.readFile(LaptopHTML, (err, data) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Server Error');
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(data);
                }
            });
            break;
            case '/overview':
    fs.readFile(overviewHTML, (err, htmlData) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Server Error');
        } else {
            fs.readFile(overviewJson, (err, jsonData) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Server Error');
                } else {
                    const laptops = JSON.parse(jsonData);
                    const cardsHTML = laptops.map(laptop => {
                        return `
                            <figure class="card">
                                <div class="card__hero">
                                    <img src="${laptop.image}" alt="" class="card__img">
                                </div>
                                <h2 class="card__name">${laptop.name}</h2>
                                <p class="card__detail"><span class="emoji-left">🖥</span> ${laptop.screen}</p>
                                <p class="card__detail"><span class="emoji-left">🧮</span> ${laptop.cpu}</p>
                                <div class="card__footer">
                                    <p class="card__price">${laptop.price}</p>
                                    <a href="${laptop.link}" class="card__link">Check it out <span class="emoji-right">👉</span></a>
                                </div>
                            </figure>`;
                    }).join('');
                    const updatedHTML = htmlData.toString().replace('<div class="cards-container">', `<div class="cards-container">${cardsHTML}`);
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(updatedHTML);
                }
            });
        }
    });
    break;
                break;
        case '/':
        case '/home':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<h1>Hunny, I am HOME</h1>`);
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<h1>We're the best company in the market</h1>`);
            break;
        case '/contacts':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<h1>Our Phone is 555-5555</h1>`);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end(`<h1 style="color:red;font-family:Arial;">NOT FOUND</h1>`);
    }
});


// '127.0.0.1','localhost'

server.listen(port, '127.0.0.1', () => {
    console.log(`Listening on port ${port}`);
});

// to request something from the browser, type
// in the address line:
//  localhost:3050
// or
//  127.0.0.1:3050
