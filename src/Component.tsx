import React, { useState } from "react";

interface Props {
  name: string;
  children?: React.ReactNode;
}

export function Component(props: Props) {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error(`Component ${props.name} error`);
  }

  return (
    <div
      style={{
        padding: "20px",
        border: "5px dotted tomato",
      }}
    >
      <div style={{
        paddingBottom: "20px",
      }}>
        Component {props.name}{" "}
        <button
          onClick={() => {
            setError((prev) => !prev);
          }}
        >
          Trigger error
        </button>
      </div>
      {props.children}
    </div>
  );
}
