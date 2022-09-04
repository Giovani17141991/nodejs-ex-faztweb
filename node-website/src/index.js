import express from "express";

const app= express()

app.get('/',(req,res)=>{
    res.send('<h1>Binevenido</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>Binevenido al about</h1>')
})

app.listen(process.env.PORT||3000)
console.log('server en el 3000',process.env.PORT||3000)