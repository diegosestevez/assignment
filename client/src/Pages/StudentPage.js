import { useEffect, useState } from 'react';
import { TextField, FormControl, FormControlLabel, FormGroup, RadioGroup, FormLabel, Radio, Checkbox, Button} from '@material-ui/core'



const StudentPage = ({userID, name}) => {
 const [questions, setQuestions] = useState(null);
 const [multipleChoice, setMultipleChoice] = useState(null);
 const [multiSelect, setMultSelect] = useState([]);
 const [fillInBlank, setFillInBlank] = useState('');

 const[postId, setPostId] = useState(null);

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
        setMultipleChoice(e.target.value);
    };

    const checkBoxValue = (e) => {
        setMultSelect({...multiSelect, [e.target.name]: e.target.checked})
    };

    const fillInValue = (e) => {
        setFillInBlank(e.target.value);
    }

    

    function handleMultipleChoice(e){
        e.preventDefault();

        const payload = {
            key:multipleChoice
        }


        const requestOptions =({
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(payload)
        })
    

        fetch('http://localhost:8000/assign/submit', requestOptions)
        .then(res => res.json())
        .then(data => setPostId(data.id))
        .catch(err => console.log(err))  
         
    }


    function handleMultiSelect(e){
        e.preventDefault();

        const payload = {
            key:multiSelect
        }


        const requestOptions =({
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(payload)
        })
    

        fetch('http://localhost:8000/assign/submit', requestOptions)
        .then(res => res.json())
        .then(data => setPostId(data.id))
        .catch(err => console.log(err))  
    }


    function handleFillIn(e){
        e.preventDefault();

        const payload={
            key:fillInBlank
        }

        const requestOptions =({
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(payload)
        })
    

        fetch('http://localhost:8000/assign/submit', requestOptions)
        .then(res => res.json())
        .then(data => setPostId(data.id))
        .catch(err => console.log(err)) 

    }


    return (
        <>
        
        {questions && questions.map(question =>{
             
            return(
            <>  {question.type === 'MC'?(
                <>
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
                
                </>
                )
                :question.type === 'MS'?(
                <>
                <form onSubmit={handleMultiSelect}>
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
                        <Button type="submit" variant="contained" color="secondary" value="submit">submit</Button>
                    </form> 
                </>
                )
                :(
                    <>
                    <form onSubmit={handleFillIn}>
                        <FormLabel>{question.title}</FormLabel>
                        <TextField variant="outlined" onChange={fillInValue} fullWidth />
                        <Button type="submit" variant="contained" color="secondary" value="submit">submit</Button>
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
