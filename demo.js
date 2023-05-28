// import fetch from "node-fetch";

// const url = "http://localhost:5002";
// // fetch(url + "/demo")
// //   .then((r) => r.json())
// //   .then((j) => console.log(j));

// const fetchData = async () => {
//   const r = await fetch(url + "/demo");
//   const j = await r.json();
//   console.log(j);
// };

// fetchData()

import axios from 'axios'

const url = "http://localhost:5002";
// fetch(url + "/demo")
//   .then((r) => r.json())
//   .then((j) => console.log(j));

// axios returns a response object that doesn't have a json method?
const fetchData = async () => {
  const r = await axios.get(url + "/demo");
//   const j = await r.json();
  console.log(r.data);
};

fetchData()
