import { useState } from "react";
import axios from "axios";

function ForgotPassword(){

const [email,setEmail] = useState("");
const [newPassword,setNewPassword] = useState("");

const resetPassword = async () => {

try{

// get employees
const res = await axios.get(
"https://ems-backend-project-sbkg.onrender.com/api/employees"
);

const user = res.data.find(emp => emp.email === email);

if(user){

await axios.put(
`https://ems-backend-project-sbkg.onrender.com/api/employees/${user._id}`,
{
password:newPassword
}
);

alert("Password Updated Successfully");

}else{

alert("Email not found");

}

}catch(error){
console.log(error);
}

};

return(

<div className="form-box">

<h2>Reset Password</h2>

<input
placeholder="Enter Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Enter New Password"
onChange={(e)=>setNewPassword(e.target.value)}
/>

<button onClick={resetPassword}>
Update Password
</button>

</div>

)

}

export default ForgotPassword;