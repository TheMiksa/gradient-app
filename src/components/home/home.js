import React, {useState} from "react";
import Gradient from "../gradient";
import "./home.css";

export const Home = () => {
    const [gradientsList, setGradientsList] = useState(JSON.parse(localStorage.getItem("gradientsList")));

    const onDeleteGradient = (id) => {
        const gradientsList = JSON.parse(localStorage.getItem("gradientsList"));
        const newGradientsList = gradientsList.filter((el) => el.id !== id);
        localStorage.setItem("gradientsList", JSON.stringify(newGradientsList));
        setGradientsList(newGradientsList);
    };
    return (
        <div>
            Home Page
            {
               gradientsList && gradientsList.map(({id, firstColor, secondColor}) => (
                <Gradient key={id} id={id} firstColor={firstColor} secondColor={secondColor} onDeleteGradient={onDeleteGradient}/>
            ))
            }
        </div>
    );
};