import React,{useEffect, useState} from 'react'
import { Typography, Grid, FormLabel, TextField, Button } from '@material-ui/core'

const InstructorPage = () => {

    const [assignments, setAssignments] = useState([])
    const [mark, setMark] = useState(0)
    const[postId, setPostId] = useState(null);
    const[userId, setUserId] = useState(null);
    
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

    


    return (
       <>
       <Typography variant="h2">Welcome Instructor</Typography>
       {assignments && assignments.map(assignment =>{           
           return(
               <>
                    {assignment.submitted?
                    <>
                       <form onSubmit={handleMarks} id={assignment._id}>
                           <h3>{assignment.name}</h3>
                            <FormLabel>{assignment.title}</FormLabel>
                            <Typography variant="body1" gutterBottom>Student Answer:
                                <Typography variant="body2">{assignment.answer}</Typography>
                            </Typography>
                            <TextField
                                required
                                id="outlined-required"
                                label="Score Required"
                                variant="outlined"
                                onChange={(e) => setMark(e.target.value)}
                            />
                            <Button type="submit" variant="contained" color="secondary" value="submit">Grade Assignment</Button>
                       </form>
                       
                    </>
                    :
                    <>
                        <Typography variant="body1">{assignment.title}</Typography>
                        <Typography variant="body2">student has not submitted assignment</Typography>
                    </>
                    }
               </>
               )
       }
       )}
       </>
    )
}

export default InstructorPage
