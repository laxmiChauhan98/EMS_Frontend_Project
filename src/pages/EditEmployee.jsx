import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"

function EditEmployee(){

const {id} = useParams()

const [salary,setSalary] = useState("")

const updateEmployee = async () =>{

await axios.put(
`https://ems-backend-project-sbkg.onrender.com/api/employees/${id}`,
{salary}
)

alert("Employee Updated")

}

return(

<div>

<h2>Update Employee Salary</h2>

<input
placeholder="Enter new salary"
onChange={(e)=>setSalary(e.target.value)}
/>

<button onClick={updateEmployee}>
Update
</button>

</div>

)

}

export default EditEmployee