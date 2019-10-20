const express = require('express');
const app = express();
const port = 3000;
const HelloController = require('./controllers/hello-controller.js');

app.get('/', HelloController.hello);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));