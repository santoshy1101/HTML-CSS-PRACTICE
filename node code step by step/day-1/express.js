const express = require("express")
const app = express();

app.get("/",(req,res)=>{
    console.log("get data prom params ", req.query.name)
    res.send(`Hello This is Home Page get data prom params <br/> <input value=${req.query.name || "usee_query_params_as_name"} /> <br/> <a href="/about">About Page</a>  <br/> <a href="/user">User Page</a> ` )
})
app.get("/user",(req,res)=>{
    res.send(`Hello This is User Page  <br/> <a href="/">Home Page</a> <br/> <a href="/user">User Page</a>`)
})
app.get("/about",(req,res)=>{
    res.send(`Hello This is About Page  <br/> <a href="/user">User Page</a>  <br/> <a href="/">Home Page</a> `)
})

app.listen(3000)