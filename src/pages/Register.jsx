import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [department,setDepartment] = useState("");
const [salary,setSalary] = useState("");
const [password,setPassword] = useState("");

const registerEmployee = async () => {

try{

await axios.post(
"https://ems-backend-project-sbkg.onrender.com/api/employees",
{
name,
email,
department,
salary,
password
}
);

alert("Registration Successful");

navigate("/login");   // redirect to login page

}catch(error){
console.log(error);
}

};

return(

<div className="form-box">

<h2>Register Employee</h2>

<input placeholder="Name" onChange={(e)=>setName(e.target.value)}/>

<input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>

<input placeholder="Department" onChange={(e)=>setDepartment(e.target.value)}/>

<input placeholder="Salary" onChange={(e)=>setSalary(e.target.value)}/>

<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

<button onClick={registerEmployee}>
Register
</button>

</div>

)

}

export default Register;