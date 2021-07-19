import React, {useState} from 'react';
import { TextField,  FormLabel, Button} from '@material-ui/core';

const Assignment3 = ({question, handleFillIn, fillInValue}) => {
    const [removeForm, setRemoveForm] = useState({})

    const handleChange = () => {
        setRemoveForm({
            display:'none'
        })
    }


    return (
        <>
        <form onSubmit={handleFillIn} style={removeForm}>
            <FormLabel>{question.title}</FormLabel>
            <TextField variant="outlined"
             name='asssignment3'
             required
             inputProps={{pattern:'([a-zA-Z]+\\s)[0-9]+'}}
             onChange={fillInValue} 
             helperText="must contain (alphabetical letters) + (exactly 1 white space) + (numbers). Example: three 1993"
             fullWidth />
            <Button type="submit" variant="contained" color="secondary" onClick={handleChange} value="submit">submit</Button>
        </form>
        </>
    )
}

export default Assignment3
