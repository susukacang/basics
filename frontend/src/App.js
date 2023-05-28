
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const url = "http://localhost:5002";
  
   const [secretKey, setSecretKey] = useState('initial')

  useEffect(()=> {
    const fetchData = async () => {
      const r = await axios.get(url + "/demo")  // axios returns json object
      console.log(r.data)
      const secret = r.data["secret"]

      setSecretKey(secret)

    }
  
    fetchData()
  },[])

  return (
    <>
      <h3>Hello App</h3>
      <h2>{secretKey}</h2>
    </>
  );
}

export default App;
