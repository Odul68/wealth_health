import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Input({ name, type, value, onChange, label }) {
  let nameFormat = name.replaceAll(" ", "-");
  nameFormat = nameFormat.toLowerCase();

  return (
    <>
      <div className="inputContainer">
        <label htmlFor={name}> {label} </label>
        {type === "date" ? (
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={value || new Date()}
            onChange={onChange}
            // required
          />
        ) : (
          <input
            name={name}
            value={value}
            type={type}
            onChange={(e) => onChange(e)}
            min={0}
            // required
          />
        )}
      </div>
    </>
  );
}
