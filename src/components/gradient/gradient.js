import {Link} from "react-router-dom";
import "./gradient.css";

export const Gradient = ({id, firstColor, secondColor, onDeleteGradient}) => {

    return (
        <div id={id} className="gradient" style={{background: `linear-gradient(to right, ${firstColor}, ${secondColor})`}}>
           <div className="settings">
               <Link to="/edit/3"
                     className="btn-edit">
                   &#9998;
               </Link>
               <div
                     onClick={() => onDeleteGradient(id)}
                     className="btn-delete">&#10006;</div>
           </div>
            <div className="colors">
                <span>{firstColor}</span>
                <span>{secondColor}</span>
            </div>
        </div>
    );
};