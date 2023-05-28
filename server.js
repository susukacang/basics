console.log("hello basics.....");

// CommonJS
// const express = require('express')

// ES6 (include "type":"module" inside package.json)
import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const x = 1

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.listen(5002, () => {
    console.log("Basics server listening on port 5002");
  });



app.get("/", (req, res) => {
  res.json({"msg":"hello basics"});
});

app.get("/demo", (req, res) => {
  console.log(process.env)
    res.json({"msg":"hello demo", "secret":process.env.REACT_APP_SECRET_KEY});
  });

app.set('view engine', "ejs")

app.get("/home", (req, res) => {
    res.render("home", {"msg":"hello one", "secret":"123456"});
  }); 

