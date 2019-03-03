const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send({name:'heero bhaii'}))
app.get('/node-B/', (req, res) => {
    console.log(req);
    console.log(req.context);
    res.json({ response: 'heero' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
