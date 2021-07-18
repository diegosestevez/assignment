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
            <TextField variant="outlined" onChange={fillInValue} fullWidth />
            <Button type="submit" variant="contained" color="secondary" onClick={handleChange} value="submit">submit</Button>
        </form>
        </>
    )
}

export default Assignment3
