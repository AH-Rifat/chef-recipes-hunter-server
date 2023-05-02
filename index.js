const express = require('express')
const app = express()

const chefInfo = require('./data/chefsData.json')

app.get('/chefs', (req, res) => {
    res.send(chefInfo)
})

app.listen(5000, () => {
    console.log('server running on 5000 port');
})