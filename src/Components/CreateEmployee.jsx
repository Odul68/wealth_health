import Input from "./Form";
import { states } from "../Data/Data";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee } from "../Redux/Reducer";
import { format } from "date-fns";

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
    zipCode: "",
  });

  function handleChangeValue(e, scope = null) {
    if (!e.target)
      return setInput({ ...input, [scope]: format(new Date(e), "dd/MM/yyyy") });
    const { name, value } = e.target;
    return setInput({ ...input, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input.id);

    dispatch(createEmployee(input));

    setShow(() => true);
  }

  const closeModal = () => {
    setShow(() => false);
  };
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
        ></Input>
        <Input
          name="birthdate"
          label="Birthdate"
          value={input.dateOfBirth}
          type="date"
          onChange={(date) => handleChangeValue(date, "dateOfBirth")}
        ></Input>
        <Input
          name="startDate"
          label="Start date"
          value={input.startDate}
          type="date"
          onChange={(date) => handleChangeValue(date, "startDate")}
        ></Input>
        <fieldset>
          <legend>Address</legend>
          <Input
            name="street"
            label="Street"
            value={input.street}
            type="text"
            onChange={handleChangeValue}
          ></Input>
          <Input
            name="city"
            label="City"
            value={input.city}
            type="text"
            onChange={handleChangeValue}
          ></Input>

          {/* <Select options={stateSelection}></Select> */}
          <Input
            name="zipCode"
            label="Zip Code"
            value={input.zipCode}
            type="text"
            onChange={handleChangeValue}
          ></Input>
        </fieldset>
        {/* <Input name="Department" type="select"></Input> */}
        <button className="saveButton" type="submit">
          Save
        </button>
      </form>
      {show && (
        <div ref={modal} className="employeeCreatedConfirmation">
          <h2>Employee created !</h2>
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={closeModal}
          ></i>
        </div>
      )}
    </>
  );
}
