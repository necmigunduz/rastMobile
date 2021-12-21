// Index.js
let express = require('express')
require('dotenv').config()

let app = express();

var port = process.env.PORT || 8081;

app.get('/', (req, res) => res.send('Hello World with Express'));
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});