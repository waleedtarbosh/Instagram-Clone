import React from "react";

const Count = ({ countsData }) => {
  return (
    <div className="flex mt-4">
      {countsData.map(({ id, label, value }) => (
        <p className="mr-10" key={id}>
          <span className="font-bold">{value}</span> {label}
        </p>
      ))}
    </div>
  );
};

export default Count;
