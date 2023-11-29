const http = require('http');

let notes = [
  { id: 1, content: 'Tamilnadu girls is best', important: true },
  { id: 2, content: 'kerala girls is best', important: true },
  { id: 3, content: 'delhi girls is best', important: false }
];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(notes));
});

const hostname = '127.0.0.1';
const port = 3001;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
