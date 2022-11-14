import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Pagination({
  nPages,
  currentPage,
  setCurrentPage,
  entries,
}) {
  const numberOfEmployees = useSelector((state) => state.employee.length);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav className="paginationNav">
      <div className="paginationInfos">
        <p>
          Showing<span> 1</span>
        </p>
        <p>
          to<span> {entries}</span>
        </p>
        <p>
          of<span> {numberOfEmployees}</span>
        </p>
        <p>entries</p>
      </div>
      <div className="paginationCommands">
        <Link onClick={prevPage} href="#">
          Previous
        </Link>
        <Link onClick={nextPage} href="#">
          Next
        </Link>
      </div>
    </nav>
  );
}
