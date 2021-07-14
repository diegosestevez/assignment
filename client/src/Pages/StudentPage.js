import { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Button } from '@material-ui/core'


const StudentPage = () => {
 const [assignData, setAssignData] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:8000/assign?user=60ef212603584a12b4c90d60')
        .then(res => res.json())
        .then(data => {
            setAssignData(data.message)
            console.log(data.message);
        })
        .catch(err => console.log('Error: ' + err))
    },[])

    return (
        <>
        <Typography variant="h3">Assignment</Typography>
        {assignData && assignData.map(assignment =>{
            
            return(
            <>   
                <Typography key={assignment._id} variant="h4">{assignment.title}</Typography>
                <Button color='default' variant='contained' value={assignment._id} >Submit</Button>
            </>
            )
        })}
        
        
        </>
    )
}

export default StudentPage
