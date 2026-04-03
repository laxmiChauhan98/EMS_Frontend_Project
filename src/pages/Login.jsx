import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async () => {

try{

const res = await axios.get(
"https://ems-backend-project-sbkg.onrender.com/api/employees"
);

const employees = res.data;

const user = employees.find(
(emp)=> emp.email === email && emp.password === password
);

if(user){

alert("Login Successful");

navigate("/employees");   // redirect to employee dashboard

}else{

alert("Invalid Email or Password");

}

}catch(error){
console.log(error);
}

};

return(

<div className="form-box">

<h2>Login</h2>

<p style={{marginTop:"10px"}}>
Forgot Password? <Link to="/forgot">Reset Here</Link>
</p>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

</div>

)

}

export default Login;