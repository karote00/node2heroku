'use strict';

const app = require('./app');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
	console.log(`Listening on ${ PORT }`);
});
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });