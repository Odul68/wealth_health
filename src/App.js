import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Employees from "./Pages/Employees";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
