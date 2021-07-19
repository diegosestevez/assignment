import React,{useEffect, useState} from 'react';
import Marking from '../components/Marking';
import { Typography, Button, Grid, Paper } from '@material-ui/core';
import {Link} from "react-router-dom";
import useStyles from './styles/styles';

const InstructorPage = () => {

    const classes = useStyles();

    const [assignments, setAssignments] = useState([])
    const [mark, setMark] = useState(0)
    const[postId, setPostId] = useState(null);
    
    useEffect(()=>{
        fetch(`http://localhost:8000/assign`)
        .then(res => res.json())
        .then(data => {
            console.log(data.assignmentData);
            setAssignments(data.assignmentData);
        })
        .catch(err => console.log('Error: ' + err))
    },[])


    const handleMarks = (e) => {
        alert('mark submitted')
        e.preventDefault();

        (() => {
            document.querySelector('.marking').style.display = 'none';
        })()

        const payload = {
            score: mark,
            status: 'Finished',
            id: e.target.id
        }

        const requestOptions =({
            method:'PATCH',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(payload)
        })
    

        fetch('http://localhost:8000/assign/mark', requestOptions)
        .then(res => res.json())
        .then(data => setPostId(data.id))
        .catch(err => console.log(err)) 
  
    }

    const updateMarks = (e) => {
        setMark(e.target.value)
    }


    return (
       <>
       <Typography variant="h2" className={classes.centerText}>Welcome Instructor</Typography>
       {assignments && assignments.map(assignment =>{           
           return(
               <>
                    {assignment.submitted && assignment.status === 'Started'?(
                    <Marking
                        assignment={assignment}
                        handleMarks={handleMarks}
                        updateMarks={updateMarks}
                    />
                    )
                    :!assignment.submitted?(
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h5" className={classes.centerText} gutterBottom>{assignment.name}</Typography>
                        <Typography variant="body2" className={classes.centerText} gutterBottom>Question: {assignment.title}</Typography>
                        <Typography variant="body1" className={classes.centerText}>student has not submitted this assignment</Typography>
                    </Paper>
                    )
                    :(
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h5" className={classes.centerText} gutterBottom>{assignment.name}</Typography>
                        <Typography variant="body2" className={classes.centerText} gutterBottom>Question: {assignment.title}</Typography>
                        <Typography variant="body1" className={classes.centerText}> Score Received: {assignment.score}</Typography>
                    </Paper>
                    )
                    }
               </>
               )
       }
       )}
       <Grid container justifyContent='center'>
            <Button component={Link} to='/home' variant="contained" color="primary">Back</Button>
       </Grid>
       </>
    )
}

export default InstructorPage
