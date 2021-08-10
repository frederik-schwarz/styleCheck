
const express = require('express')
const path = require('path')

//change routes file to suite new topic then also change this
const styleCheckRoutes = require('./routes/styleCheck')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

//change the name below to relate to new website
server.use('/api/v1/home', styleCheckRoutes)

module.exports = server