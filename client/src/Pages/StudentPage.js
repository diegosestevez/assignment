import { useEffect, useState } from 'react';
import { TextField, FormControl, FormControlLabel, FormGroup, RadioGroup, FormLabel, Radio, Checkbox} from '@material-ui/core'


const StudentPage = ({userID, name}) => {
 const [questions, setQuestions] = useState(null);
 const [radioButtons, setRadioButtons] = useState(null);
 const [checkBoxes, setCheckBoxes] = useState(null)

    useEffect(()=>{
        fetch(`http://localhost:8000/assign?user=${userID}`)
        .then(res => res.json())
        .then(data => {
            setQuestions(data.message)
            console.log(data.message);
        })
        .catch(err => console.log('Error: ' + err))
    },[])



    const radioButtonValue = (e) => {
        setRadioButtons(e.target.value);
    };

    const checkBoxValue = (e) => {
        setCheckBoxes({...checkBoxes, [e.target.name]: e.target.checked})
    };

    return (
        <>
        
        {questions && questions.map(question =>{
             
            return(
            <>  {question.type === 'MC'?(
                <>
                    <form>
                        <FormLabel component="legend">{question.title}</FormLabel>
                        <RadioGroup value={radioButtons} onChange={radioButtonValue}>
                            <FormControlLabel value="2016" control={<Radio />} label={question.options[0]}/>
                            <FormControlLabel value="1976" control={<Radio />} label={question.options[1]} />
                            <FormControlLabel value="2002" control={<Radio />} label={question.options[2]} />
                            <FormControlLabel value="1999" control={<Radio />} label={question.options[3]} />
                        </RadioGroup>
                    </form>
                
                </>
                )
                :question.type === 'MS'?(
                <>
                <form>
                    <FormLabel>{question.title}</FormLabel>
                    <FormGroup>
                            <FormControlLabel
                                control={<Checkbox onChange={checkBoxValue} name={question.options[0]} />}
                                label={question.options[0]}
                            />
                            <FormControlLabel
                                control={<Checkbox  onChange={checkBoxValue} name={question.options[1]} />}
                                label={question.options[1]}
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={checkBoxValue} name={question.options[2]} />}
                                label={question.options[2]}
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={checkBoxValue} name={question.options[3]} />}
                                label={question.options[3]}
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={checkBoxValue} name={question.options[4]} />}
                                label={question.options[4]}
                            />
                        </FormGroup>
                    </form> 
                </>
                )
                :(
                    <>
                    <form>
                        <FormLabel>{question.title}</FormLabel>
                        <TextField variant="outlined" fullWidth />
                    </form>
                    </>)
                }
                
            </>
            )
           
        })}

        </>
    )
}

export default StudentPage
