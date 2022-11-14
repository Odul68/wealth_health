import { useState } from "react";

export default function TableHead({ columns, handleSorting }) {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("");

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor }) => {
          const arrow =
            sortField === accessor && order === "asc"
              ? "up"
              : sortField === accessor && order === "desc"
              ? "down"
              : "default";
          return (
            <th
              className={arrow}
              key={accessor}
              onClick={() => handleSortingChange(accessor)}
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
