const express = require('express');
const todoController = require('./controllers/todoController');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));


// controller
todoController(app);

app.listen(3000);
console.log('port 3000 is listening');