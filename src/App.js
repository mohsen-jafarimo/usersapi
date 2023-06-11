import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
