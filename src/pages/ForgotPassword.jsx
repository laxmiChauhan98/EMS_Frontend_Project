import { useState } from "react";
import axios from "axios";

function ForgotPassword(){

const [email,setEmail] = useState("");
const [newPassword,setNewPassword] = useState("");

const resetPassword = async () => {

try{

await axios.put(
"https://ems-backend-project-sbkg.onrender.com/api/employees/reset-password",
{
email: email,
password: newPassword
}
);

alert("Password Updated Successfully");

}catch(error){

alert("Email not found");

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