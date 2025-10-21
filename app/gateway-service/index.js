const express = require("express")
const fetch = require('node-fetch')
const app = express()

app.get("/users" , async(req,res)=>{
    const resp = await fetch("http://user:3001/users")
    const data = await resp.json()

    res.json(data)
})

app.get("/products" , async(req,res)=>{
    const resp = await fetch("http://product:3002/products")
    const data = await resp.json()

    res.json(data)
})

app.get("/health" , (req,res)=>{res.json({service:'getway' , status:'ok'})})

app.listen(3000 , ()=>{console.log("gateway run on port 3000")})