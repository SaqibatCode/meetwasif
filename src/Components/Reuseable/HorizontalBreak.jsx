import React from "react";

function HorizontalBreak(props) {
  return (
    <div className={`w-[${props.width}%] m-auto`}>
      <hr className="border border-1 border-white mt-20 mb-2" />
    </div>
  );
  console.log(props.width);
}

export default HorizontalBreak;
