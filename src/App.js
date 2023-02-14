import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
          {/* <Navbar /> */}

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
