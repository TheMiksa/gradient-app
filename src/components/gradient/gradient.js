import {Link} from "react-router-dom";
import "./gradient.css";

export const Gradient = ({id, firstColor, secondColor, onDeleteGradient}) => {
    const isWhiteColor = (color) => {
        if (color.length === 4) {
            return color.match(/#[fF][fF][fF]/) ? "black" : "white";
        } else if (color.length === 7) {
            return color.match(/#[fF]\w[fF]\w[fF]\w/) ? "black" : "white";
        }
    };
    return (
        <div id={id} className="gradient" style={{background: `linear-gradient(to right, ${firstColor}, ${secondColor})`}}>
           <div className="settings">
               <Link to={`/edit/:${id}`}
                     className="btn-edit">
                   &#9998;
               </Link>
               <div
                     onClick={() => onDeleteGradient(id)}
                     className="btn-delete">&#10006;</div>
           </div>
            <div className="colors">
                <span style={{color: isWhiteColor(firstColor)}}>{firstColor}</span>
                <span style={{color: isWhiteColor(secondColor)}}>{secondColor}</span>
            </div>
        </div>
    );
};