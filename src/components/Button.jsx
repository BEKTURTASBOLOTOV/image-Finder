import React from "react";

const Button = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className="Button">
        load more
      </button>
    </>
  );
};

export default Button;
