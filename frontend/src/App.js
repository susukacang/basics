import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";

import { Button } from "react-bootstrap";
import CountBtn from "./components/countBtn";

function App() {
  const url = "http://localhost:5002";

  const [secretKey, setSecretKey] = useState("initial");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const r = await axios.get(url + "/demo"); // axios returns json object
      console.log(r.data);
      const secret = r.data["secret"];

      setSecretKey(secret);
    };

    fetchData();
  }, [count]);

  return (
    <>
      <h3>Hello App</h3>
      <h2>{secretKey}</h2>

      <BrowserRouter>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Routes>
          <Route
            path="/home"
            element={<Home user="zoey" luckyNumber={secretKey} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      {/* <CountBtn /> */}

      <Button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setCount((x) => x + 1);
        }}
      >
        {count}
      </Button>

      {/* <a href="http://localhost:5002/home">home</a>
      <a href="http://localhost:5002/about">about</a>
      <a href="http://localhost:5002/contact">contact</a> */}
      {/* <a href="http://localhost:3000/home2.html">home2</a>
      <a href="http://localhost:3000/about2.html">about2</a> */}
    </>
  );
}

export default App;
