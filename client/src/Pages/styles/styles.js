import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper: {
       margin: '5vh 25vw',
       padding: '50px'
    },
    centerText: {
        textAlign: 'center'
    }
})

export default useStyles