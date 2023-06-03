import axios from "axios";
import { useEffect, useState } from "react";
import ButtonScreen from "./screens/ButtonScreen";
import CarouselScreen from "./screens/CarouselScreen";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";

function App() {
  const url = "http://localhost:5002";

  const [secretKey, setSecretKey] = useState("initial");

  // useEffect(()=> {
  //   const fetchData = async () => {
  //     const r = await axios.get(url + "/demo")  // axios returns json object
  //     console.log(r.data)
  //     const secret = r.data["secret"]

  //     setSecretKey(secret)

  //   }

  //   fetchData()
  // },[])

  return (
    <>
      <h3>Hello App</h3>
      <h2>{secretKey}</h2>
      <ButtonScreen></ButtonScreen>
      <CarouselScreen />

      <Router>
        <ul>
          <li>
            <Link to="/page1">Page1</Link>
          </li>
          <li>
            <Link to="/page2">Page2</Link>
          </li>
          <li>
            <Link to="/page3">Page3</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/page1" element={<Page1 />}></Route>
          <Route exact path="/page2" element={<Page2 />} />
          <Route exact path="/page3" element={<Page3 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
