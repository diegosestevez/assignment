// import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom";


const FrontPage = () => {

    return (
       <>
       <Button component={Link} to="/instructor" variant="contained" color="primary">
            Instructor
        </Button>
        <Button component={Link} to="/student/1" variant="contained" color="secondary">
            Student 1
        </Button>
        <Button component={Link} to="/student/2" variant="contained" color="secondary">
            Student 2
        </Button>
        <Button component={Link} to="/student/3" variant="contained" color="secondary">
            Student 3
        </Button>
       </>
    )
}

export default FrontPage
