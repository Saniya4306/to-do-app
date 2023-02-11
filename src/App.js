import Login from "./components/Login";
import Register from "./components/Register";
import Todo from "./components/Todo";
import {Route, Routes }from "react-router-dom";

function App() {
  return(
   
    
    <Routes>
    <Route exact path="/" element={<Todo/>}/> 
    <Route exact path="/Login" element={<Login/>}/>
    <Route exact path="/Register" element={<Register/>}/>
    </Routes>
    
    
  )
}

export default App;
