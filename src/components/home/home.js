import {Link} from "react-router-dom"
import GradientsList from "../gradients-list";
import "./home.css";

export const Home = () => {

    return (
        <div className="home">
            <Link to="/new" className="btn btn-link">Add gradient</Link>
            <GradientsList/>
        </div>
    );
};