const express = require('express')
const app = express()
const cors = require('cors')

const chefInfo = require('./data/chefsData.json')

app.use(cors)

app.get('/chefs', (req, res) => {
    res.send(chefInfo)
})

app.listen(5000, () => {
    console.log('server running on 5000 port');
})