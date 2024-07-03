import React from "react";

function teaDisplay(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>Origin:{props.origin}</h2>
            <p>{props.description}</p>
        </div>
    )
}
export default teaDisplay;

