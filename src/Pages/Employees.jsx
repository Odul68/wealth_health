import Header from "../Components/Header";
import Table from "../Components/Table";
import { Link } from "react-router-dom";

export default function Employees() {
  return (
    <>
      <Header />
      <h1>Current Employees</h1>
      <Table />
      <Link to="/">Home</Link>
    </>
  );
}
