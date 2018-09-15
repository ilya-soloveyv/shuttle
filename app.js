const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Shuttle. Test page'))
app.get('/test', (req, res) => res.send('Test page'))


app.listen(3000, () => console.log('Example app listening on port 3000!!!'))