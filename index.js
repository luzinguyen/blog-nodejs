const express = require('express')
const app = express()
const port = 3000

app.get('/tintuc', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;

    res.send('xin chao the gioi')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})