import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {v4} from "uuid";
import NewContent from "../new-content";
import "./edit.css";

export const Edit = ({match}) => {
    const gradientsList = JSON.parse(localStorage.getItem("gradientsList"));//1dif
    const id = match.params.id.slice(1);//dif
    const gradient = gradientsList.find((grad) => grad.id === id);//2dif
    const firstColor = gradient.firstColor.slice(1);
    const secondColor = gradient.secondColor.slice(1);
    return (
        <NewContent id={id} firstClr={firstColor} secondClr={secondColor} buttonName="Change gradient"/>
    )
};