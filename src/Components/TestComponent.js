import React from "react";

const TestComponent = (props) => {
    return (
    <div>
        <h5>Voici votre compte avec une variable let : {props.points}</h5>
        <button onClick={props.functionClick}>Appuyer ICI</button>
    </div>)
}

export default TestComponent