import React,{useEffect, useState} from 'react';
import Marking from '../components/Marking';
import { Typography, Button } from '@material-ui/core';
import {Link} from "react-router-dom";

const InstructorPage = () => {

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
       <Typography variant="h2">Welcome Instructor</Typography>
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
                    <>
                        <Typography variant="body1">{assignment.title}</Typography>
                        <Typography variant="body2">student has not submitted assignment</Typography>
                    </>
                    )
                    :(
                        <>
                        <Typography variant="h5">{assignment.name}</Typography>
                        <Typography variant="body1">Question: {assignment.title}</Typography>
                        <Typography variant="body1"> Score Received: {assignment.score}</Typography>
                        </>
                    )
                    }
               </>
               )
       }
       )}
       <Button component={Link} to='/home' variant="contained" color="primary">Back</Button>
       </>
    )
}

export default InstructorPage
