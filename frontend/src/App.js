
// import fetch from "node-fetch";
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const url = "http://localhost:5002";
  // fetch(url + "/demo")
  //   .then((r) => r.json())
  //   .then((j) => console.log(j));
  
  // const fetchData = async () => {
  //   const r = await fetch(url + "/demo");
  //   const j = await r.json();
  //   console.log(j);
  // };
  
  // fetchData()

  // need cors

  // let secretKey = 'initial'
  const [secretKey, setSecretKey] = useState('initial')

  useEffect(()=> {
    const fetchData = async () => {
      const r = await axios.get(url + "/demo")  // axios returns json object
      console.log(r.data)
      const secret = r.data["secret"]
      // secretKey = secret
      setSecretKey(secret)

    }
  
    fetchData()
  },[])


  // setTimeout(() => {
  //   console.log("hello app..." + secretKey)
  // }, 100)

  return (
    <>
      <h3>Hello App</h3>
      <h2>{secretKey}</h2>
    </>
  );
}

export default App;
