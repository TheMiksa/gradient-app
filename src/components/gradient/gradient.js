import {Link} from "react-router-dom";
import "./gradient.css";

export const Gradient = ({id, firstColor, secondColor, onDeleteGradient}) => {
    const isWhiteColor = (color) => {
        if (color.length === 4) {
            return color.match(/[a-fA-F]{2}/) ? "black" : "white";
        } else if (color.length === 7) {
            return color.match(/[a-fA-F]\w[a-fA-F]\w[a-fA-F]\w/) ? "black" : "white";
        }
    };
    return (
        <div id={id} className="gradient" style={{background: `linear-gradient(to right, ${firstColor}, ${secondColor})`}}>
           <div className="settings">
               <Link to={`/edit/:${id}`}
                     className="btn-edit">
                   &#9998;
               </Link>
               <button onClick={() => onDeleteGradient(id)}
                    className="btn-delete">
                   &#10006;
               </button>
           </div>
            <div className="colors">
                <span style={{color: isWhiteColor(firstColor)}}>{firstColor}</span>
                <span style={{color: isWhiteColor(secondColor)}}>{secondColor}</span>
            </div>
        </div>
    );
};