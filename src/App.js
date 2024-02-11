import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import Navbar from "./Components/NavBar/Navbar";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/registration" element={<Registration />} ></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
