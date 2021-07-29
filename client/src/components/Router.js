import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import InstructorPage from "../Pages/InstructorPage";
import StudentPage from "../Pages/StudentPage";
import FrontPage from "../Pages/FrontPage.js";

const Routes = () => {
      return (
            <Router>
                  <Switch>
                        <Route path="/home">
                              <FrontPage/>
                        </Route>
                        <Route exact path="/">
                              <Redirect to="/home"/>
                        </Route>
                        <Route path="/instructor">
                              <InstructorPage/>
                        </Route>
                        <Route path={'/student/'}>
                              <StudentPage/>
                        </Route>
                  </Switch>
            </Router>
      )
}

export default Routes