import React from "react";
import "./Display.css";

const Display = (props) => {
    return <button className="display"> { props.value } </button>
}

export default Display;