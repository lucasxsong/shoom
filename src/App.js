import React, { Component } from 'react';
import Home from "./Components/Home.js";
import Results from "./Components/Results.js";

import {
    Switch,
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Router>
                    <Switch>
                        <Route exact path = '/' component = {Home}/>
                        <Route path = '/Results' component = {Results}/>
                    </Switch>
                </Router>
                
                
            </div>

         );
    }
}
 
export default App;