const express = require('express')
const next = require('next')
const app=express()
const port = 8080;

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})