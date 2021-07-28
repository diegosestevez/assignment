// import { Button, Grid, Paper, Typography } from '@material-ui/core'
// import { Link } from "react-router-dom";
// import useStyles from './styles/styles';

// const FrontPage = () => {
//  const classes = useStyles();

//     const handleFetch = (e) => {
//         alert('fetched user data from database')
//         fetch('http://localhost:8000/users/create')
//         .catch(err => console.log(err))
//     }   

//     return (
//        <>
//         <Paper elevation={3} className={classes.paper}>
//             <Grid container spacing={3} className={classes.root}>
//                 <Typography variant="h3" gutterBottom>Who are you?</Typography>
//                 <Grid item>
//                         <Button component={Link} to="/instructor" variant="contained" color="primary">
//                             Instructor
//                         </Button>
//                     </Grid>
//                     <Grid item>
//                         <Button component={Link} to="student/61008db4ca62a72860aba5a2" variant="contained" color="secondary">
//                             Student 1
//                         </Button>
//                     </Grid>
//                     <Grid item>
//                         <Button component={Link} to="student61008db4ca62a72860aba5a3" variant="contained" color="secondary">
//                             Student 2
//                         </Button>
//                     </Grid>
//                     <Grid item>
//                         <Button component={Link} to="student/61008db4ca62a72860aba5a4" variant="contained" color="secondary">
//                             Student 3
//                         </Button>
//                     </Grid>  
//             </Grid>
//         </Paper>
//         <Paper  elevation={3} className={classes.paper}>
//             <Grid container spacing={3} className={classes.root}>
//             <Typography variant="body1" gutterBottom>Click here first to preload each page with user data</Typography>
//                 <form onSubmit={handleFetch} >
//                     <Button type="submit" variant="contained">
//                         Create Users
//                     </Button>
//                 </form>
//             </Grid>
//         </Paper>
//        </> 
//     )
// }

// export default FrontPage


import { useHistory } from 'react-router-dom';
import React, {useState} from 'react';
import useStyles from './styles/styles';

const FrontPage = () =>{
    const history = useHistory();
    const classes = useStyles();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);

    
    const signIn = (e) => {
        e.preventDefault();

        setLoading(true);

        fetch(`http://localhost:8000/users/auth?user=${userName}&password=${password}`)
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            console.log(data);

            let auth = {
                "loggedIn": true,
                "userId" : data.user._id,
                "name": data.user.name,
                "userType": data.user.usertype
            }

           localStorage.setItem('local_auth', JSON.stringify(auth));

            if(data.user.usertype === 'Student'){
                history.push(`/student/${data.user._id}`)
            }else{
                history.push('/instructor')
            }


        })
        .catch(err => {
            setLoading(false)
            console.log('the url containing this user data does not exist')
        })

    }



    return(
        <>

            <form onSubmit={(e) => signIn(e)}>
                <label>Username</label>
                <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                {!loading ? <button type='submit'>Submit</button> : <p>Loading...</p>}
            </form>
        </>
    )
}

export default FrontPage