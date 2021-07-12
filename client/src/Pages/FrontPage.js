import { Button } from '@material-ui/core'
import { Link } from "react-router-dom";

const FrontPage = () => {
    return (
       <>
       <Button component={Link} to="/instructor" variant="contained" color="primary">
            Instructor
        </Button>
        <Button component={Link} to="/student" variant="contained" color="secondary">
            Student
        </Button>
       </>
    )
}

export default FrontPage
