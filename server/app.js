const express = require('express');
// const morgan = require('morgan');
const bodyParser	= require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Setup logger
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'client/build')));
// app.use(express.static(path.join(__dirname, 'public')));

// app.set('/', path.join(__dirname, '/'));
// app.set('view engine', 'ejs');

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });
// app.get('/', (req, res) => res.render('index'));
// app.get('/', (req, res) => {
// 	// res.render('index')
// 	res.sendFile(path.resolve(__dirname, '..', 'public/index.html'));
// 	// res.send('Hello World');
// });
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client/build/index.html'));
});

module.exports = app;
