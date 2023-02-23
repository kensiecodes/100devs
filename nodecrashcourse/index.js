const http = require('http')
const path = require('path')
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'Bob Smith', age: 40},
    //         { name: 'John Doe', age: 30}
    //     ];
    //     res.write(200, {'Content-type': 'application/json' });
    //     res.end(JSON.stringify(users));
    //}
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    console.log(filePath)
    res.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));