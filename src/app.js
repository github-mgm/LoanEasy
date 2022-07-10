const express = require('express')
const bodyParser = require('body-parser')
const app = new express()

app.get('/',(req,res,err)=> {
    res.send("Mahak")
})

app.listen(5000)