import { useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, Redirect, Link, useHistory } from "react-router-dom";
import InstructorPage from "../Pages/InstructorPage";
import StudentPage from "../Pages/StudentPage";
import FrontPage from "../Pages/FrontPage.js";



const Routes = () => {
    let history = useHistory();

    useEffect(()=>{
        fetch('http://localhost:8000')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        }).catch(err => console.log('Error: ' + err));
    })


    return (
      <Router>
            <Switch>
                  <Route path="/home">
                        <FrontPage history={history}/>
                  </Route>
                  <Route exact path="/">
                        <Redirect to="/home" />
                  </Route>
                  <Route path="/instructor">
                        <InstructorPage history={history}/>
                  </Route>
                  <Route path="/student">
                        <StudentPage history={history}/>
                  </Route>
            </Switch>
      </Router>
    )
}

export default Routes
