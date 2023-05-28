console.log("hello basics.....");

// CommonJS
// const express = require('express')

// ES6 (include "type":"module" inside package.json)
import express from "express";

const app = express();

app.listen(5002, () => {
    console.log("Basics server listening on port 5002");
  });
  

app.get("/", (req, res) => {
  res.json({"msg":"hello basics"});
});

app.get("/demo", (req, res) => {
    res.json({"msg":"hello demo"});
  });

app.set('view engine', "ejs")

app.get("/home", (req, res) => {
    res.render("home", {"msg":"hello one", "secret":"123456"});
  }); 

