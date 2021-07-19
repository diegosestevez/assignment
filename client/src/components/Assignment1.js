import React, {useState, useEffect} from 'react'
import { FormControlLabel, RadioGroup, FormLabel, Radio, Button} from '@material-ui/core'

const Assignment1 = ({question, multipleChoice, handleMultipleChoice, radioButtonValue}) => {
    
    const [removeForm, setRemoveForm] = useState({})

    //Cheap little hack that solves problem of passing data to api and removing the form, there must be a better way...
    const handleChange = () => {
    setRemoveForm({
        display:'none'
    })
    }


    return ( 
    <form onSubmit={handleMultipleChoice} style={removeForm}>
        <FormLabel component="legend">{question.title}</FormLabel>
        <RadioGroup value={multipleChoice} onChange={radioButtonValue}>
            <FormControlLabel value="2016" control={<Radio />} label={question.options[0]}/>
            <FormControlLabel value="1976" control={<Radio />} label={question.options[1]} />
            <FormControlLabel value="2002" control={<Radio />} label={question.options[2]} />
            <FormControlLabel value="1999" control={<Radio />} label={question.options[3]} />
        </RadioGroup>
        <Button type="submit" variant="contained" color="secondary" value="submit" onClick={handleChange}>submit</Button>
    </form>
    )
}

export default Assignment1
