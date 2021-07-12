import { useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Button} from '@material-ui/core';



const Routes = () => {
    
    useEffect(()=>{
        fetch('http://localhost:8000')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        }).catch(err => console.log('Error: ' + err));
    })


    return (
        <Router>
        <Button component={Link} to='/instructor' variant="contained" color="primary">
              Instructor
        </Button>
        <Button component={Link} to='/student1' variant="contained" color="secondary">
              Student #1
        </Button>
        <Button component={Link} to='/student2' variant="contained" color="secondary">
              Student #2
        </Button>
        <Button component={Link} to='/student3' variant="contained" color="secondary">
              Student #3
        </Button>
      </Router>
    )
}

export default Routes
