const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(logger('dev'));

app.get('/api/v1/users', (request, response)=> {
    response.status(200).send('Hello world');
});

app.get('*', (request, response) => {
    response.status(404).json('404 Page not found');
})

app.listen(port, ()=> {
    console.log(`server started on port ${port}`);
});