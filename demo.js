import fetch from "node-fetch";

const url = "http://localhost:5002";
// fetch(url + "/demo")
//   .then((r) => r.json())
//   .then((j) => console.log(j));

const fetchData = async () => {
  const r = await fetch(url + "/demo");
  const j = await r.json();
  console.log(j);
};

fetchData()
