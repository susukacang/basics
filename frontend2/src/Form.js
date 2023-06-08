import React, { useState } from "react";
import axios from "axios";

const MyForm = () => {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`name is ${name}`);

    // const getData = async () => {
    //     const res = await axios.get('http://localhost:8081')
    //     console.log("got.....",  res)
    // }

    // getData()


    const postData = async () => {
        await axios.post("http://localhost:8081/about?secretNumber=3141592265", {"name":name})
        .then((res) => {
            console.log("post...", res.data.status)
        })
    }

    postData()

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <h4>{name}</h4>
        <input type="submit" />
      </form>
    </div>
  );
};

export default MyForm;
