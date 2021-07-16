import { TextField,  FormLabel, Button} from '@material-ui/core';

const Assignment3 = ({question, handleFillIn, fillInValue}) => {
    return (
        <>
        <form onSubmit={handleFillIn}>
            <FormLabel>{question.title}</FormLabel>
            <TextField variant="outlined" onChange={fillInValue} fullWidth />
            <Button type="submit" variant="contained" color="secondary" value="submit">submit</Button>
        </form>
        </>
    )
}

export default Assignment3
