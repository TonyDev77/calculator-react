import React from "react";
import "./Button.css";

const Button = (props) => {

    let classCSS = "button ";
    classCSS += props.operation ? "operation" : "";
    classCSS += props.double ? "double" : "";
    classCSS += props.triple ? "triple" : "";

    return (
        // o componente abaixo recebe a classe css, a função e o parâmetro da função.
        <button className={ classCSS } onClick={e => props.click && props.click(props.myLabel)}>
            { props.myLabel }
        </button>
    )
}

export default Button;