import {BrowserRouter,Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom'

function App(){
  return <div>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route path='/neet/online-coaching-class-11' element={<Class11Program />} />
      <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />
      <Route path='/' element={<Landing />} />
      <Route path='*' element={<Errorpage/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </div>
}

function Layout(){
  return <div style={{height:'100vh'}}>
    <Link to='/'>Allen</Link> |<Link to='/neet/online-coaching-class-11'>Class11</Link>  | <Link to="/neet/online-coaching-class-12">Class 12</Link>
    
    <Outlet />
    Footer
  </div>
}

function Class11Program(){
  return <div>
    Neet programs for class 11th
  </div>
}

function Class12Program(){
  const navigate = useNavigate();
  function redirectUser(){
    navigate('/')
  }
  return <div>
    Neet programm for class 12th
    <button onClick={redirectUser}>Go Back to landing page</button>
  </div>
}
function Landing(){
  return <div>
    Welcome to allen
  </div>
}
function Errorpage(){
  return <div>
    Sorry page not found
  </div>
}

export default App