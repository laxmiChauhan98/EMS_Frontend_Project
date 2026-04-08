import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Employees() {

  const [employees, setEmployees] = useState([]);

  // Fetch employees from backend
  // const fetchEmployees = async () => {
  //   try {
  //     const res = await axios.get(
  //       "https://ems-backend-project-sbkg.onrender.com/api/employees"
  //     );
  //     setEmployees(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchEmployees();
  // }, []);

  //fetch employees with token
  const fetchEmployees = async () => {

  try {

    const token = localStorage.getItem("token");

    const res = await axios.get(
      "https://ems-backend-project-sbkg.onrender.com/api/employees",
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    );

    setEmployees(res.data);

  } catch (error) {
    console.log(error);
  }

};
 useEffect(() => {
    fetchEmployees();
  }, []);

  // Delete employee
  const deleteEmployee = async (id) => {
    try {
      await axios.delete(
        `https://ems-backend-project-sbkg.onrender.com/api/employees/${id}`
      );

      setEmployees(employees.filter((emp) => emp._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">

      <h1 className="page-title">Employee Dashboard</h1>

      <div className="employee-grid">

        {employees.map((emp) => (

          <div className="employee-card" key={emp._id}>

            <h2 className="emp-name">
              Employee Name: {emp.name}
            </h2>

            <p><b>Email:</b> {emp.email}</p>

            <p><b>Department:</b> {emp.department}</p>

            <p><b>Salary:</b> ₹{emp.salary}</p>

            <div className="card-buttons">

              <Link to={`/edit/${emp._id}`}>
                <button className="edit-btn">
                  Edit Employee
                </button>
              </Link>

              <button
                className="delete-btn"
                onClick={() => deleteEmployee(emp._id)}
              >
                Delete Employee
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Employees;