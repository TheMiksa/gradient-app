import React from "react";

import GradientSettings from "../gradient-settings";
import "./edit.css";

export const Edit = ({match}) => {
    const gradientsList = JSON.parse(localStorage.getItem("gradientsList"));
    const id = match.params.id.slice(1);
    const gradient = gradientsList.find((grad) => grad.id === id);
    const firstColor = gradient.firstColor.slice(1);
    const secondColor = gradient.secondColor.slice(1);
    return (
        <GradientSettings id={id} firstClr={firstColor} secondClr={secondColor}/>
    )
};