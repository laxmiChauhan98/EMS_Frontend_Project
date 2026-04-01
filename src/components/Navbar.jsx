import { Link } from "react-router-dom";

function Navbar(){
  return(
    <nav style={{background:"#222",padding:"10px"}}>
      <Link to="/" style={{color:"white",margin:"10px"}}>Home</Link>
      <Link to="/about" style={{color:"white",margin:"10px"}}>About</Link>
      <Link to="/contact" style={{color:"white",margin:"10px"}}>Contact</Link>
      <Link to="/login" style={{color:"white",margin:"10px"}}>Login</Link>
      <Link to="/register" style={{color:"white",margin:"10px"}}>Register</Link>
      <Link to="/employees" style={{color:"white",margin:"10px"}}>Employees</Link>
    </nav>
  )
}

export default Navbar;