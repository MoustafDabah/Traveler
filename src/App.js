import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Questions from "./Components/Questions/Questions";
import Subscript from "./Components/Subscript/Subscript";
import Reviews from "./Components/Reviews/Reviews";
import slides from "./Components/Reviews/data.json";
import useLocalStorage from "use-local-storage";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/registration" element={<Registration />} ></Route>
        </Routes> 
      </BrowserRouter>
      
      
      {/* 
      <Questions/>
      <Subscript/>
      <Reviews slides={slides} />
      */}
    </div>
  );
}

export default App;
