// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'src/index.html'));
  res.render('src/index.html');
});

/**
 * Get port from environment and store in Express.
 */
const ip = process.env.IP || '0.0.0.0';
const port = process.env.PORT || '8080';
// app.set('port', port);

app.listen(port, ip);
console.log("Server running on http://%s:%s", ip, port);
module.exports = app;

/**
 * Create HTTP server.
 */
// const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
// server.listen(port, () => console.log(`API running on localhost:${port}`));
