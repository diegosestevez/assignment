import React,{useEffect, useState} from 'react'
import { Typography, Grid, FormLabel, TextField, Button } from '@material-ui/core'

const InstructorPage = () => {

    const [assignments, setAssignments] = useState([])
    
    useEffect(()=>{
        fetch(`http://localhost:8000/assign`)
        .then(res => res.json())
        .then(data => {
            console.log(data.assignmentData);
            setAssignments(data.assignmentData);
        })
        .catch(err => console.log('Error: ' + err))
    },[])


    return (
       <>
       <Typography variant="h2">Welcome Instructor</Typography>
       {assignments && assignments.map(assignment =>{           
           return(
               <>
                    {assignment.submitted?
                    <>
                       <form>
                           <h3>{assignment.name}</h3>
                            <FormLabel>{assignment.title}</FormLabel>
                            <Typography variant="body1" gutterBottom>Student Answer:
                                <Typography variant="body2">{assignment.answer}</Typography>
                            </Typography>
                            <TextField
                                required
                                id="outlined-required"
                                label="Score Required"
                                defaultValue={assignment.score}
                                variant="outlined"
                            />
                       </form>
                       <Button type="submit" variant="contained" color="secondary" value="submit">Grade Assignment</Button>
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
