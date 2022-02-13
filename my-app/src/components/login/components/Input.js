import React from "react";

function Input({ attribute, handleChange, params }) {
  return (
    <div>
      <input
        className={attribute.className}
        id={attribute.id}
        name={attribute.name}
        placeholder={attribute.placeholder}
        type={attribute.type}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
    </div>
  );
}

export default Input;
