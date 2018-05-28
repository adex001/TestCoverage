const express = require('express');

const app = express();

const port = 3001;

app.get('/', (req, res) => {
    res.json({
        title: 'Homepage',
        message: 'This is the index page',
    })
});

app.listen(port, () =>{
    console.log(`App listening on port ${port}`);
});

module.exports = app;