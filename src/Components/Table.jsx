import { useState } from "react";
import { employees } from "../Data/Data";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import { useDispatch } from "react-redux";

export default function Table() {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee);
  const [tableData, setTableData] = useState(employee);

  const columns = [
    { label: "Last Name", accessor: "lastName" },
    { label: "First Name", accessor: "firstName" },
    { label: "Start Date", accessor: "startDate" },
    { label: "Department", accessor: "department" },
    { label: "Date of Birth", accessor: "dateOfBirth" },
    { label: "Street", accessor: "street" },
    { label: "City", accessor: "city" },
    { label: "State", accessor: "state" },
    { label: "Zip Code", accessor: "zipCode" },
  ];

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        return (
          a[sortField]
            .toString()
            .localeCompare(b[sortField].toString(), "en", { numeric: true }) *
          (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  const [inputText, setInputText] = useState("");
  const keys = ["lastName", "firstName", "city"];
  const search = (data) => {
    return data.filter((employee) =>
      keys.some((key) => employee[key].toLowerCase().includes(inputText))
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentEmployees = tableData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(tableData.length / recordsPerPage);

  return (
    <>
      <section className="filterOptions">
        <div className="perPage">
          <p>Show</p>
          <select
            name="perPage"
            onChange={(e) => {
              const selectedPagination = e.target.value;
              setRecordsPerPage(selectedPagination);
            }}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <p>entries</p>
        </div>
        <div className="searchBar">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="search"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Search..."
          />
        </div>
      </section>
      <table className="employeesTable">
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody columns={columns} tableData={search(currentEmployees)} />
      </table>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        entries={recordsPerPage}
      />
    </>
  );
}
