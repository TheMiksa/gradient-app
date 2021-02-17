import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {v4} from "uuid";
import "./new-content.css";

export const NewContent = ({id = "", firstClr = "", secondClr = "", buttonName = "Create gradient"}) => {
    const [firstColor, setFirstColor] = useState(firstClr);
    const [secondColor, setSecondColor] = useState(secondClr);
    const [valid, toggleValid] = useState(false);
    useEffect(() => {
        if (toCheckHexColors(firstColor) && toCheckHexColors(secondColor)) {
            !valid && toggleValid(true);
        }
        else {
            valid && toggleValid(false)
        }
    })

    const toCheckHexColors = (value) => {
        const checkValue = value.match(/[a-f]*[A-F]*[0-9]*/g).join("");
        if ((value.length === 3 || value.length === 6) && value === checkValue) {
            return true;
        }
        return false
    };



    const toAddGradient = (first, second) => {
        const gradientsList = JSON.parse(localStorage.getItem("gradientsList"));
        if (id) {
            gradientsList.forEach((el) => {
                if (el.id === id) {
                    el.firstColor = "#" + first;
                    el.secondColor = "#" + second;
                }
            });
        }
        else {
            const newGradient = {
                id,
                firstColor: "#" + firstColor,
                secondColor: "#" + secondColor
            };
            gradientsList.push(newGradient);
        }
        localStorage.setItem("gradientsList", JSON.stringify(gradientsList));
    };

    const btn = valid ? (
        <Link to="/" className="btn btn-gradient" onClick={() => toAddGradient(firstColor, secondColor)}>{buttonName}</Link>
    ) : (
        <button className="btn btn-disabled" disabled={true}>Create gradient</button>
    );

    return (
        <div className="new">
            <div className="new-menu">
                <div className="input-box">
                    <input type="text" value={"#" + firstColor} onChange={({target}) => setFirstColor(target.value.slice(1))}/>
                    <input type="text" value={"#" + secondColor} onChange={({target}) => setSecondColor(target.value.slice(1))}/>
                </div>
                <div  className="btn-box">
                    {btn}
                    <Link to="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </div>
            <div className="new-gradient" style={{background: `linear-gradient(to right, #${firstColor}, #${secondColor}`}}></div>
        </div>
    );
};