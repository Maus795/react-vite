import { useState } from "react";

export function Button() {
  const [count, setcount] = useState(0);

  function ClickUp() {
    setcount(count + 1);
  }
  function ClickDown() {
    setcount(count - 1);
  }

  return (
    <>
      <div className="WindowCount">
        {" "}
        <button className="closeModalUp" type="submit" onClick={ClickUp}>
          +
        </button>
        <div className="Count">{count}</div>
        <button className="closeModalDown" type="submit" onClick={ClickDown}>
          -
        </button>
      </div>
    </>
  );
}
