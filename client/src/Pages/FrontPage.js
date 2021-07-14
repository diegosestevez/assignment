// import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core'
import { Link, useHistory } from "react-router-dom";


const FrontPage = () => {
    // let history = useHistory();

    // const [userName, setUserName] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);

    // useEffect(()=>{
    //     setLoading(true);

    //     fetch(`http://localhost:8000/users/auth?user=${userName}&pass=${password}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         if(data.error){
    //             setError(data.error);
    //             setLoading(false)
    //         }else{
    //             console.log('Authenticated');
    //             setLoading(false);

    //             let auth = {
    //                 "loggedIn": true,
    //                 "userId": data.user._id,
    //                 "name": data.user.name,
    //                 "usertype": data.user.usertype
    //             };

    //             localStorage.setItem('local_auth', JSON.stringify(auth));

    //             if(data.user.usertype === 'Student'){
    //                 history.push(`/${data.user.usertype}?id=${data.user._id}`);
    //             }else{
    //                 history.push(`/${data.user.usertype}`)
    //             }
    //         }
    //     }).catch(err =>{
    //         setError(JSON.stringify(err));
    //         setLoading(false)
    //     })
    // })


    return (
       <>
       <Button component={Link} to="/instructor" variant="contained" color="primary">
            Instructor
        </Button>
        <Button component={Link} to="/student" variant="contained" color="secondary">
            Student
        </Button>
       </>
    )
}

export default FrontPage
