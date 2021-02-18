import Navbar from './components/Navbar';
import Home from "./components/Home";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewForm from "./components/NewForm";

function App() {

    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/create">
                            <NewForm />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
