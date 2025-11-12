import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


import { useState, useEffect } from 'react';




function App() {

  <>
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/pokemon">Pokemon</Link>
    </nav>

    <Routes>
    <Route path="/" element={<Home/>}
    </BrowserRouter>
    </Routes>


  console.log("Hello world");

  useEffect(()=> {
    console.log("in the effect")
  }, [todos])

  let hello = "hello!";

  let arr = [1,2,3,4,5,6];
  
  return (
    <>
      {hello}
      {arr.map((el, index) => (
        <b key={index}>{el}</b>
        ))}
    </>
  )
}

export default App
