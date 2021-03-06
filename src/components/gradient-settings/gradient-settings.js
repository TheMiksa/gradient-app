import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {v4} from "uuid";
import "./gradient-settings.css";

export const GradientSettings = ({id = "", firstClr = "", secondClr = "", }) => {
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
                id: v4(),
                firstColor: "#" + firstColor,
                secondColor: "#" + secondColor
            };
            gradientsList.push(newGradient);
        }
        localStorage.setItem("gradientsList", JSON.stringify(gradientsList));
    };

    const btnClass = valid ? "btn-gradient" : "btn-disabled";

    return (
        <div className="gradient-settings">
            <div className="gradient-settings-menu">
                <div className="input-box">
                    <div className="input-with-label">
                        <label htmlFor="first-input" className="first-latter">#</label>
                        <input id="first-input" type="text" value={firstColor} maxLength={6}
                               onChange={({target}) => setFirstColor(target.value)}/>
                    </div>
                    <div className="input-with-label">
                        <label htmlFor="second-input" className="first-latter">#</label>
                        <input id="second-input" type="text" value={secondColor} maxLength={6}
                               onChange={({target}) => setSecondColor(target.value)}/>
                    </div>
                </div>
                <div  className="btn-box">
                    <Link to="/" className={`btn ${btnClass}`} onClick={() => toAddGradient(firstColor, secondColor)}>
                        {id ? "Change gradient" : "Create gradient"}
                    </Link>
                    <Link to="/" className="btn btn-home">Back to Home</Link>
                </div>
            </div>
            <div className="gradient-settings-gradient" style={{background: `linear-gradient(to right, #${firstColor}, #${secondColor}`}}></div>
        </div>
    );
};