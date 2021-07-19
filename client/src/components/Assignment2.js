import React, {useState} from 'react';
import { FormControlLabel, FormGroup, FormLabel, Checkbox, Button} from '@material-ui/core';

const Assignment2 = ({question, handleMultiSelect, checkBoxValue}) => {
    
    return (
        <>
            <form onSubmit={handleMultiSelect} >
                <FormLabel>{question.title}</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox onChange={checkBoxValue} value="Technicall Illustration" name={question.options[0]} />}
                            label={question.options[0]}
                        />
                        <FormControlLabel
                            control={<Checkbox  onChange={checkBoxValue} value="Instructional Design" name={question.options[1]} />}
                            label={question.options[1]}
                        />
                        <FormControlLabel
                            control={<Checkbox onChange={checkBoxValue} value="Financial Advice" name={question.options[2]} />}
                            label={question.options[2]}
                        />
                        <FormControlLabel
                            control={<Checkbox onChange={checkBoxValue} value="Admission and Registration" name={question.options[3]} />}
                            label={question.options[3]}
                        />
                        <FormControlLabel
                            control={<Checkbox onChange={checkBoxValue} value="Audio-visual Loans" name={question.options[4]} />}
                            label={question.options[4]}
                        />
                    </FormGroup>
                <Button id="assign2" type="submit" variant="contained" color="secondary" value="submit">submit</Button>
            </form> 
        </>
    )
}

export default Assignment2
