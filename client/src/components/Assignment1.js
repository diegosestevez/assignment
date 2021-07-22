import { FormControlLabel, RadioGroup, FormLabel, Radio, Button, Paper} from '@material-ui/core'
import useStyles from './styles/styles'

const Assignment1 = ({question, multipleChoice, handleMultipleChoice, radioButtonValue}) => {
    const classes = useStyles();
    
    return ( 
    <Paper elevation={3} className={classes.paper}>
        <form onSubmit={handleMultipleChoice}>
            <FormLabel component="legend" >{question.title}</FormLabel>
            <RadioGroup value={multipleChoice} onChange={radioButtonValue} className={classes.form}>
                <FormControlLabel value="2016" control={<Radio required/>} label={question.options[0]}/>
                <FormControlLabel value="1976" control={<Radio required />} label={question.options[1]} />
                <FormControlLabel value="2002" control={<Radio required/>} label={question.options[2]} />
                <FormControlLabel value="1999" control={<Radio required/>} label={question.options[3]} />
            </RadioGroup>
            <Button id="assign1" type="submit" variant="contained" color="secondary" value="submit" >submit</Button>
        </form>
    </Paper>
    )
}

export default Assignment1
