// import { useEffect, useState } from 'react';
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import { Link } from "react-router-dom";
import useStyles from './styles/styles';

const FrontPage = () => {
 const classes = useStyles();

    return (
       <>
       <Paper elevation={3} className={classes.paper}>
            <Grid container spacing={3} className={classes.root}>
                <Typography variant="h3" gutterBottom>Who are you?</Typography>
                <Grid item>
                        <Button component={Link} to="/instructor" variant="contained" color="primary">
                            Instructor
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button component={Link} to="/student/1" variant="contained" color="secondary">
                            Student 1
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button component={Link} to="/student/2" variant="contained" color="secondary">
                            Student 2
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button component={Link} to="/student/3" variant="contained" color="secondary">
                            Student 3
                        </Button>
                    </Grid>
            </Grid>
        </Paper>
       </>
    )
}

export default FrontPage
