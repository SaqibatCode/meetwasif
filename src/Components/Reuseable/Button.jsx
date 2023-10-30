import React from "react";

function Button(props) {
  return (
    <button className="font-light bg-white text-blue-500 py-3 px-6 rounded-full">
      {props.text}
    </button>
  );
}

export default Button;
