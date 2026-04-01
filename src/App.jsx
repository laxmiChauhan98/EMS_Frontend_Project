import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Employees from "./pages/Employees";
import EditEmployee from "./pages/EditEmployee";
import './App.css';
import ForgotPassword from "./pages/ForgotPassword"



function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/edit/:id" element={<EditEmployee/>}/>
        <Route path="/forgot" element={<ForgotPassword/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;