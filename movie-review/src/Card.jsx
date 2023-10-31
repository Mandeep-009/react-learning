import React from "react";
import './App'

function Card (props) {
    return (<>
    {props.images.map(function(image){
        return <img src={image} width={300} />
    })}
    <p>{props.name}</p>
    </>);
}
export default Card;