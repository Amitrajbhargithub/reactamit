import React from "react";
import {Route, Routes} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Error from "./Error";
import Contact from "./Contact";
const App = () =>
{
  return(
    <>
     <Routes>
       <Route exact path='/about' element={<About/>}/>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/contact" element={<Contact/>}/>
       <Route path="*"  element={<Error/>}/>
     </Routes>
    </>
  )
}
export default App;
