import React, {useState, useEffect} from 'react';
import { TextField,  FormLabel, Button} from '@material-ui/core';

const Assignment3 = ({question, handleFillIn, fillInValue}) => {

    return (
        <>
        <form onSubmit={handleFillIn} >
            <FormLabel>{question.title}</FormLabel>
            <TextField variant="outlined"
             name='assignment3'
             required
             inputProps={{pattern:'([a-zA-Z]+\\s)[0-9]+'}}
             onChange={fillInValue} 
             helperText="Must contain letters + exactly 1 white space + numbers. (Example: 'three 1993')"
             fullWidth />
            <Button id="assign3" type="submit" variant="contained" color="secondary" value="submit">submit</Button>
        </form>
        </>
    )
}

export default Assignment3
