import React, {useState} from "react";
import {Link} from "react-router-dom"
import "./new.css";

export const New = () => {
    const [firstColor, setFirstColor] = useState("fff");
    const [secondColor, setSecondColor] = useState("000");

    const toCheckHexColors = (value, setColor) => {
        if (value.length === 3 || value.length === 6) setColor(value);
    }
    return (
        <div>
            <Link to="/" className="btn btn-gradient">back to home</Link>
            <br/>
            <input type="text" onChange={({target}) => toCheckHexColors(target.value, setFirstColor)}/>
            <input type="text" onChange={({target}) => toCheckHexColors(target.value, setSecondColor)}/>
            <br/>
            New Page
            <br/>
            <span>
                First Color: {firstColor}
            </span>
            <br/>
            <span>
                Second Color: {secondColor}
            </span>
            <br/>
            <button className="btn btn-selected">Add gradient</button>
            <div className="new-gradient" style={{background: `linear-gradient(to right, #${firstColor}, #${secondColor}`}}></div>
        </div>
    );
};