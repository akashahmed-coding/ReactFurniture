require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
app.use(express.json())
const PORT = process.env.PORT

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    })
}

// app.use(express.static(path.join(__dirname, './client/build')))
// app.get("*",(req,res)=>{
//         res.sendFile(path.join(__dirname,'client','build','index.html'))
// })
app.listen(PORT,()=>{
    console.log(`server runnig successfull at ${PORT}`)
}) 