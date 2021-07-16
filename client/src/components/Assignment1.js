import React from 'react'
import { FormControlLabel, RadioGroup, FormLabel, Radio, Button} from '@material-ui/core'

const Assignment1 = ({question, multipleChoice, handleMultipleChoice, radioButtonValue}) => {
    return (
        <form onSubmit={handleMultipleChoice}>
        <FormLabel component="legend">{question.title}</FormLabel>
        <RadioGroup value={multipleChoice} onChange={radioButtonValue}>
            <FormControlLabel value="2016" control={<Radio />} label={question.options[0]}/>
            <FormControlLabel value="1976" control={<Radio />} label={question.options[1]} />
            <FormControlLabel value="2002" control={<Radio />} label={question.options[2]} />
            <FormControlLabel value="1999" control={<Radio />} label={question.options[3]} />
        </RadioGroup>
        <Button type="submit" variant="contained" color="secondary" value="submit">submit</Button>
    </form>
    )
}

export default Assignment1
