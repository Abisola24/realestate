const express = require("express")
const mongoose = require("mongoose")
const app = require("express")()
app.use(express.json())


require('dotenv').config()

const PORT = process.env.PORT||8000
//mongoose.connect(process.env.MONGODB_URI)


app.listen( PORT, ()=>{
    console.log('Sever running on'+ " "+ PORT )
})
