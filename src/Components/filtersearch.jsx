export default function filterEmployees({ filterText, onFilter, onClear }) {
  return (
    <div className="searchBar">
      <i className="fa fa-search" aria-hidden="true"></i>
      <input
        className="textField"
        id="search"
        type="text"
        placeholder="Filter By Name"
        aria-label="Search Input"
        value={filterText}
        onChange={onFilter}
      />
      <button> className="clearButton" type="button" onClick={onClear}</button>
    </div>
  );
}
