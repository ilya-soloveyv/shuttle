const express = require('express')
const app = express()
const pug = require('pug')

app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index.pug', { title: 'Shuttle' })
})

app.listen(3000, () => console.log('Example app listening on port 3000'))