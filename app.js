const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/node-B/', (req, res) => res.send('node-B'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))