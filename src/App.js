import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/index" element={<Navbar />} />
        <Route path="/index" element={<Main />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
