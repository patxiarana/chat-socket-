const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

  io.on('connection', (socket) => {
   //console.log('un usuario se a conectado')
   /*socket.on('chat' , (msg) => {
    console.log('mensaje:'  +msg) }) */
    socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
})

app.get('/', (req, res)=>{
//res.send('<h1>aplicacion chat</h1>')
//console.log(__dirname)
res.sendFile(`${__dirname}/cliente/index.html`)
})

server.listen( 3000, ()=> {
    console.log('servidor corriendo en el puerto 3000')
})