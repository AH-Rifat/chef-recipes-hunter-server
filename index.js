const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({name: 'Server is Running...'})
})

app.listen(5000, () => {
    console.log('server running on 5000 port');
})