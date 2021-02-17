import React, {useState} from "react";
import Gradient from "../gradient";
import "./gradients-list.css";

export const GradientsList = () => {
    const [gradientsList, setGradientsList] = useState(JSON.parse(localStorage.getItem("gradientsList")));

    const onDeleteGradient = (id) => {
        const gradientsList = JSON.parse(localStorage.getItem("gradientsList"));
        const newGradientsList = gradientsList.filter((el) => el.id !== id);
        localStorage.setItem("gradientsList", JSON.stringify(newGradientsList));
        setGradientsList(newGradientsList);
    };

    return (
        <div className="gradients-list">
            {   gradientsList && (
                gradientsList.map(({id, firstColor, secondColor}) => (
                    <Gradient key={id} id={id} firstColor={firstColor} secondColor={secondColor} onDeleteGradient={onDeleteGradient}/>
                )))}
        </div>
    );
};