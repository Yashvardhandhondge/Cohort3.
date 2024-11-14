
import {atom,useSetRecoilState,useRecoilValue} from 'recoil'
import { counterAtom } from './Selector';
function App(){
  return <div>
    <Buttons></Buttons>
    <Counter></Counter>
    <IsEven></IsEven>
  </div>
}

function Buttons(){
  const setCount = useSetRecoilState(counterAtom)
  function increase(){
    setCount(c=>c+2);
  }
  function decrease(){
 setCount(c=>c-1)
  }
  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Counter(){
  const count = useRecoilValue(counterAtom)
  return <div>
    {count}
  </div>
}
function IsEven(){
  const even = useRecoilValue(counterAtom)
  return <div></div>
}