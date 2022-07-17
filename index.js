const http = require("http");

const books = [
    {
        id: '1',
        title: 'Book n1',
        pages: 250,
        author: 'Writer 1'
    }
]

const server = http.createServer((req, res) => {
    // Get all books
    if(req.url === '/books' && req.method === 'GET') {
        res.writeHead(200, {
            "Content-Type": "application/json charset=utf8"
        })
        const resp = {
            status: 'OK',
            books
        }
        res.end(JSON.stringify(resp))
    } else if (req.url === '/books' && req.method === "POST") {
        
    }
});

server.listen(3001, () => console.log("Server running on port : 3000"))