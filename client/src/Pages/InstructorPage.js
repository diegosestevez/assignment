import React,{useEffect, useState} from 'react';
import Marking from '../components/Marking';
import Submit from '../components/Submit';
import { Typography, Grid} from '@material-ui/core';
import useStyles from './styles/styles';

const InstructorPage = () => {

    const classes = useStyles();

    const [assignments, setAssignments] = useState([])
    const [mark, setMark] = useState(0)
    
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
        .catch(err => console.log(err)) 

        //Understandably reloading in React is bad practice 
        //but this make it so the user is unable to update their submission once sent
        window.location.reload();
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
                    <Submit 
                        assignment={assignment} 
                        message='student has not submitted this assignment'
                    />
                    )
                    :(
                    <Submit 
                        assignment={assignment} 
                        message={`Score Recieved: ${assignment.score}`}
                    />
                    )
                    }
               </>
               )
       }
       )}
        <Grid container justifyContent="center">
             <a href="/home">Back</a>
         </Grid>
       </>
    )
}

export default InstructorPage
