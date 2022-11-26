import Header from "../Components/Header";
import CreateEmployee from "../Components/CreateEmployee";
import { Link } from "react-router-dom";

/**
 * Homepage using components Header and CreateEmployee
 * Form to create a new employee
 */

export default function Homepage() {
  return (
    <>
      <Header />
      <Link className="currentEmployeesListLink" to="/employees">
        View Current Employees
      </Link>
      <section className="formSection">
        <h1>Create Employee</h1>
        <CreateEmployee />
      </section>
    </>
  );
}
