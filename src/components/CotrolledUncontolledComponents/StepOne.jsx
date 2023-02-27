import { useState } from "react";

const StepOne = ({ goToNext }) => {
  const [state, setState] = useState("");
  return (
    <div>
      <h1> Step one</h1>
      <select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">None</option>
        <option value="First">First</option>
        <option value="Second">Second</option>
        <option value="Third">Third</option>
      </select>
      <button
        disabled={state === ""}
        onClick={() => goToNext({ value: state })}
      >
        Next
      </button>
    </div>
  );
};

export default StepOne;
