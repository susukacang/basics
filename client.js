console.log("I am client");

import fetch from "node-fetch";
let output = ''
fetch("http://localhost:5002")
    .then(res => res.json())
    .then(data => data.msg)
    .then(msg => {console.log(msg); output = msg})
    .catch(err => console.error(err));

setTimeout(()=>{console.log("hello....." + output)}, 100)
