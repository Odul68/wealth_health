import Input from "./Form";
import { states, departments } from "../Data/Data";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee } from "../Redux/Reducer";
import { useEffect } from "react";
import { Dropdown } from "dropdown-odul68";

/**
 * function to add new employee
 * form with date selector and dropdown
 * @returns new employee dispatched with redux
 *
 */
export default function CreateEmployee() {
  const employee = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const modal = useRef();

  const [input, setInput] = useState({
    id: employee.length + 1,
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  function handleChangeValue(e, scope = null) {
    if (!e.target) return setInput({ ...input, [scope]: new Date(e) });
    const { name, value } = e.target;
    return setInput({ ...input, [name]: value });
  }

  /**
   * Dropdown data selection
   * selected value is the showed before opening it
   * Send selected value to input for new employee data
   *
   */

  const [selectedState, setSelectedState] = useState(states[0]);
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);

  function selectState(e) {
    setSelectedState(e);
    setInput({ ...input, state: e.name });
  }

  function selectDepartment(e) {
    setSelectedDepartment(e);
    setInput({ ...input, department: e.name });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createEmployee(input));
    setShow(() => true);
  }

  const closeModal = () => {
    setShow(() => false);
  };

  useEffect(() => {
    if (employee.length) {
      setInput((prev) => ({ ...prev, id: employee.length + 1 }));
    }
  }, [employee]);

  return (
    <>
      <form onSubmit={handleSubmit} className="createEmployeeContainer">
        <Input
          name="firstName"
          label="First Name"
          value={input.firstName}
          type="text"
          onChange={handleChangeValue}
        ></Input>
        <Input
          name="lastName"
          label="Last name"
          value={input.lastName}
          type="text"
          onChange={handleChangeValue}
          aria-labelledby="lastName"
        ></Input>
        <Input
          name="birthdate"
          label="Birthdate"
          value={input.dateOfBirth}
          type="date"
          onChange={(date) => handleChangeValue(date, "dateOfBirth")}
          aria-labelledby="birthdate"
        ></Input>
        <Input
          name="startDate"
          label="Start date"
          value={input.startDate}
          type="date"
          onChange={(date) => handleChangeValue(date, "startDate")}
          aria-labelledby="startDate"
        ></Input>
        <fieldset>
          <legend>Address</legend>
          <Input
            name="street"
            label="Street"
            value={input.street}
            type="text"
            onChange={handleChangeValue}
            aria-labelledby="street"
          ></Input>
          <Input
            name="city"
            label="City"
            value={input.city}
            type="text"
            onChange={handleChangeValue}
            aria-labelledby="city"
          ></Input>
          <Dropdown
            name="stateDropdown"
            selected={selectedState}
            label="State"
            arr={states}
            field="name"
            onClick={selectState}
            aria-labelledby="State"
          />
          <Input
            name="zipCode"
            label="Zip Code"
            value={input.zipCode}
            type="text"
            onChange={handleChangeValue}
            aria-labelledby="zipCode"
          ></Input>
        </fieldset>
        <Dropdown
          name="departmentDropdown"
          selected={selectedDepartment}
          field="name"
          label="Department"
          arr={departments}
          onClick={selectDepartment}
          aria-labelledby="Department"
        />
        <button className="saveButton" type="submit">
          Save
        </button>
      </form>
      {show && (
        <div ref={modal} className="employeeCreatedConfirmation">
          <h2>Employee created !</h2>
          <span className="closeModal" aria-hidden="true" onClick={closeModal}>
            X
          </span>
        </div>
      )}
    </>
  );
}
