import { columns } from "../Data/Data";
import { useState } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import DataTable from "react-data-table-component";

export default function Table() {
  const employee = useSelector((state) => state.employee);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const paginationComponentOptions = {
    rowsPerPageText: "Entries",
  };

  const filteredItems = employee.filter(
    (item) =>
      item.firstName &&
      item.firstName.toLowerCase().includes(filterText.toLowerCase())
  );

  const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
      <div className="searchBar">
        <input
          className="textField"
          type="text"
          placeholder="Rechercher..."
          aria-label="Search Input"
          value={filterText}
          onChange={onFilter}
          autoFocus
        />
        <button
          id="btn-filter"
          className="clearButton"
          type="button"
          onClick={onClear}
        >
          X
        </button>
      </div>
    </>
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <>
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
        paginationResetDefaultPage={resetPaginationToggle} // optional, reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        paginationComponentOptions={paginationComponentOptions}
        // sortIcon={sortIcon}
      />
    </>
  );
}
