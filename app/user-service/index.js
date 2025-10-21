const express = require("express")
const app = express()

app.get("/users" , (req,res)=>{
    res.json([
        {id:1,name:'mohammad'},
        {id:2 , name:"mfz"}
    ])
})
app.listen(3001 , ()=>{console.log("user service run on port 3001")})