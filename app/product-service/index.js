const express = require("express")
const app = express()

app.get("/products" , (req,res)=>{
    res.send([
        {id:1 , name:'laptop'},
        {id:2 , name:'phone'}
    ])
})

app.get("/health" , (req,res)=>{
    res.json({service:'product' , status:'ok'})
})

app.listen(3002 , ()=>{console.log("product service run on port 3002")})