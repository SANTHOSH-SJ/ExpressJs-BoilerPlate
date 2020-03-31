// pulling all the required files
const express = require('express')
const http = require('http')

const dishRouter= require("./routes/userRouter")

// setting host and port
const hostname='localhost'
const port=80

// this is to say we are gonna use express
const app=express(); 

// any request comes with /users will be handled by user router
app.use('/users',userRouter) 
// for users with id


// folder from which static files will be served, if a file is present
app.use(express.static(__dirname+'/public')) 

// id a requested file not present then do:
app.use((req, res, next)=>{ 
    // next is optional parameter
    // use next only when u need it
    res.statusCode=200
    res.setHeader("Contenr-Type", 'text/html')
    res.end("<html><title>Index</title><body><h1>Hello World!!!</h1></body></html>")
})

// create a simple http server
const server = http.createServer(app)

server.listen(port, hostname, ()=>{
    console.log(`server running at port ${hostname}:${port}`)
})

