import React from "react";
import {Route} from "react-router-dom";

import Week2 from "./Week2";
import AddPage from "./AddPage";

function App() {

    return (
        <div>
            <Route path="/" exact>
                <Week2/>
            </Route>
            <Route path="/add" exact>
                <AddPage/>
            </Route>
        </div>
    );
}

export default App;


