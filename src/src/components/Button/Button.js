import React from "react";
import "./Button.css";

function Button(props) {
  console.log("props are", props);
  const { variant = "primary", name, myDate, ...rest } = props;
  console.log("children::::", name);
  return (
    // <button className={`button ${variant}`} {...rest}>
    //   {name}
    // </button>
    <input value={myDate} />
  );
}

export default Button;
