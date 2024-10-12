import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [countervisible, setcountervisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(function () {
    let clock = setInterval(function () {
      setcountervisible((c) => !c);
    }, 5000);

    let clcok = setInterval(function () {
      setCount(function (count) {
        return count + 1;
      });
    }, 1000);


    return function () {
      clearInterval(clock);
      clearInterval(clcok);
    };
  }, []);

  return (
    <>
      {countervisible ? <Counter count={count}></Counter> : null}
    </>
  );
}

function Counter({ count }) {
  console.log("count");

  useEffect(function () {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <>
      <div>
        <h1>{count}</h1>
      </div>
    </>
  );
}

export default App;
