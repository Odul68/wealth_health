import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/**
 * Create an Input component for the form
 * @param {name, type, value, onChange, label}
 * @returns Input Component to be used in the form of CreateEmployee
 */

export default function Input({ name, type, value, onChange, label }) {
  return (
    <>
      <div className="inputContainer">
        <label htmlFor={name}> {label} </label>
        {type === "date" ? (
          <DatePicker
            id={name}
            dateFormat="dd/MM/yyyy"
            selected={value || new Date()}
            onChange={onChange}
          />
        ) : (
          <input
            name={name}
            id={name}
            value={value}
            type={type}
            onChange={(e) => onChange(e)}
            min={0}
          />
        )}
      </div>
    </>
  );
}
