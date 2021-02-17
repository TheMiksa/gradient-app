import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import {v4} from "uuid";
import "./new.css";

export const New = () => {
    const [firstColor, setFirstColor] = useState("");
    const [secondColor, setSecondColor] = useState("");
    const [valid, toggleValid] = useState(false);

    useEffect(() => {
        if (toCheckHexColors(firstColor) && toCheckHexColors(secondColor)) {
            !valid && toggleValid(true);
        }
        else {
            valid && toggleValid(false)
        }
        console.log("first: " + toCheckHexColors(firstColor));
        console.log("second: " + toCheckHexColors(secondColor));
    })

    const toCheckHexColors = (value) => {
        const checkValue = value.match(/[a-f]*[A-F]*[0-9]*/g).join("");
        if ((value.length === 3 || value.length === 6) && value === checkValue) {
            console.log("value: " + value);
            console.log("checkValue:" + checkValue);
            return true;
        }
        return false
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
        <Link to="/" className="btn btn-gradient" onClick={() => toAddGradient(firstColor, secondColor)}>Create gradient</Link>
        ) : (
        <button className="btn btn-disabled" disabled={true}>Create gradient</button>
        );

    return (
        <div>

            <input type="text" value={firstColor} onChange={({target}) => setFirstColor(target.value)}/>
            <input type="text" value={secondColor} onChange={({target}) => setSecondColor(target.value)}/>
            <br/>
            {btn}
            <br/>
            <div className="new-gradient" style={{background: `linear-gradient(to right, #${firstColor}, #${secondColor}`}}></div>
        </div>
    );
};


const someText = "fF5bFa";
const filteredText = someText.match(/[a-f]*[A-F]*[0-9]*/g).join("");
 if (someText !== filteredText) {
     console.log("Uncurrect!");
 } else console.log("Currect!");