import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import {Route, Routes }from "react-router-dom";

function App() {
  return(
   
    
    <Routes>
    <Route exact path="/Home" element={<Home/>}/> 
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/Register" element={<Register/>}/>
    </Routes>
    
    
  )
}

export default App;
