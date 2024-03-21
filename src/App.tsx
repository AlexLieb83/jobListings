import React from "react";

export const App = () => {
  const names = ["Hailey", "Alex", "Callie"];

  return (
    <>
      <div className="text-5xl">App</div>
      <ul>
        {names.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </>
  );
};
