import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import About from './component/About';
import Home from './component/Home';

const App = () => {
  return (
    <div>

<Link to="/">Home</Link>
<Link to="/about"> About </Link>



      <Routes>
        <Route path="/about" element={<About />} />

        <Route path='/' element= {<Home/>}/>







      </Routes>
    </div>
  )
}

export default App