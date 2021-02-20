import React from "react";

import GradientSettings from "../gradient-settings";
import "./edit.css";

export const Edit = ({match}) => {
    const gradientsList = JSON.parse(localStorage.getItem("gradientsList"));//1dif
    const id = match.params.id.slice(1);//dif
    const gradient = gradientsList.find((grad) => grad.id === id);//2dif
    const firstColor = gradient.firstColor.slice(1);
    const secondColor = gradient.secondColor.slice(1);
    return (
        <GradientSettings id={id} firstClr={firstColor} secondClr={secondColor}/>
    )
};