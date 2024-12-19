require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const conn = require('./config/db')
conn()
const starterFruits = require('./config/seed')
const Fruit = require('./models/fruit')

//homeroute
app.get('/', (req, res)=>{
    res.send('Home Page!')
})

//seed route = populate our db with starter data
app.get('/fruit/seed', async (req, res)=>{
    try {
        await Fruit.deleteMany({})
        await Fruit.create(starterFruits)
        res.json(starterFruits)
    } catch (error) {
        console.log(`something went wrong loading seed data: ${error.message}`)
    }
})

app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})