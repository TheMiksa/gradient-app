import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Edit from "./components/edit";
import Home from "./components/home";
import New from "./components/new";
import NoMatch from "./components/no-match";
import './App.css';
import '../src/data/gradients-list';

const GradientsList = React.createContext([]);

function App() {
  return (
    <div className="App">
        <Router>
                <Link to="/new" className="btn-link">Add gradient</Link>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/new" component={New} />
                <Route exact path="/edit/:id" component={Edit} />
                <Route exact component={NoMatch}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
