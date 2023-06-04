import {Button} from 'react-bootstrap'
import { useState } from "react";

const CountBtn = () => {
   const [count, setCount] = useState(0);
   return (<Button type="button" className='btn btn-primary'
    onClick={() => {
      setCount((x) => x + 1);
    }}
  >
    {count}
  </Button>)
};


export default CountBtn