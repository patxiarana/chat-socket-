
const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

app.get('/', (req, res)=>{
//res.send('<h1>aplicacion chat</h1>')
//console.log(__dirname)
res.sendFile(`${__dirname}/cliente/index.html`)
})

server.listen( 3000, ()=> {
    console.log('servidor corriendo en el puerto 3000')
})