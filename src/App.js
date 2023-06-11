import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/register";
import Profile from "./components/pages/profile";
import PrivateRoutes from "./components/pages/privateRoutes";
import Footer from "./components/footer";
import Allusers from "./components/Allusers";

function App() {
  return (
    <>
      <Header />
      <Allusers />
      <Routes>
        <Route path="" element={<PrivateRoutes />}>
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
