import React, {useState} from 'react';
import { Typography, Grid, FormLabel, TextField, Button } from '@material-ui/core';


const Marking = ({handleMarks, assignment, updateMarks}) => {
    const [removeForm, setRemoveForm] = useState({})

    const hideForm = () => {
        setRemoveForm({
            display:'none'
        })
    }

    return (
        <form onSubmit={handleMarks} id={assignment._id} style={removeForm}>
        <h3>{assignment.name}</h3>
         <FormLabel>{assignment.title}</FormLabel>
         <Typography variant="body1" gutterBottom>Student Answer:
             <Typography variant="body2">{assignment.answer}</Typography>
         </Typography>
         <TextField
             required
             type="number"
             label="Score"
             helperText="Numerical Value Only"
             variant="outlined"
             size="small"
             onChange={updateMarks}
         />
         <Button id="marking" type="submit" variant="contained" color="secondary" value="submit" onClick={hideForm}>Grade Assignment</Button>
    </form>
    )
}

export default Marking