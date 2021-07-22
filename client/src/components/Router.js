import { useEffect, useState } from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import InstructorPage from "../Pages/InstructorPage";
import StudentPage from "../Pages/StudentPage";
import FrontPage from "../Pages/FrontPage.js";



const Routes = () => {

    const [studentID1, setStudentID1] = useState([]);
    const [studentID2, setStudentID2] = useState([]);
    const [studentID3, setStudentID3] = useState([]);
    const [studentName1, setStudentName1] = useState([]);
    const [studentName2, setStudentName2] = useState([]);
    const [studentName3, setStudentName3] = useState([]);
    
    useEffect(()=>{
      fetch('http://localhost:8000/users')
      .then(res => res.json())
      .then(data => {

          //investigate react useReducer state when refactoring this   
          setStudentID1(data.users[1]._id);
          setStudentID2(data.users[2]._id);
          setStudentID3(data.users[3]._id);

          setStudentName1(data.users[1].name);
          setStudentName2(data.users[2].name);
          setStudentName3(data.users[3].name);
      })
      .catch(err => console.log('Error: ' + err))
  },[])


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
                        <InstructorPage />
                  </Route>
                  <Route path="/student/1">
                        <StudentPage userID={studentID1} name={studentName1}/>
                  </Route>
                  <Route path="/student/2">
                        <StudentPage userID={studentID2} name={studentName2}/>
                  </Route>
                  <Route path="/student/3">
                        <StudentPage userID={studentID3} name={studentName3}/>
                  </Route>
            </Switch>
      </Router>
    )
}

export default Routes
