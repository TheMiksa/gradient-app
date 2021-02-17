import React, {useState} from "react";
import {Link} from "react-router-dom"
import {v4} from "uuid";
import "./new.css";

export const New = () => {
    const [firstColor, setFirstColor] = useState("fff");
    const [secondColor, setSecondColor] = useState("000");
    const [valid, toggleValid] = useState(true);

    const toCheckHexColors = (value, setColor) => {
        if (value.length === 3 || value.length === 6) {
            setColor(value);
            !valid && toggleValid(true);
        }
        else valid && toggleValid(false);
    };
    const toAddGradient = (first, second) => {
        const gradientsList = JSON.parse(localStorage.getItem("gradientsList"));
        const newGradient = {
          id: v4(),
          firstColor: "#" + firstColor,
          secondColor: "#" + secondColor
        };

        gradientsList.push(newGradient);
        localStorage.setItem("gradientsList", JSON.stringify(gradientsList));
    };
    const btn = valid ? (
        <Link to="/" className="btn btn-gradient" onClick={() => toAddGradient(firstColor, secondColor)}>Add Gradient</Link>
        ) : (
        <button className="btn btn-danger" disabled={true}>Invalid values</button>
        );
    return (
        <div>
            {btn}
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