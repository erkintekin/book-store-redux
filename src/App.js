import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
