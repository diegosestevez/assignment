import { useEffect, useState } from 'react';
import Assignment1 from '../components/Assignment1';
import Assignment2 from '../components/Assignment2';
import Assignment3 from '../components/Assignment3';


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
        alert("Assignment was submitted!")
        e.preventDefault();

        const payload = {
            answer:multipleChoice,
            submitted: true,
            user_id: userID,
            type:'MC'
        }


        const requestOptions =({
            method:'PATCH',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(payload)
        })
    

        fetch('http://localhost:8000/assign/submit', requestOptions)
        .then(res => res.json())
        .then(data => setPostId(data.id))
        .catch(err => console.log(err)) 
         
    }


    function handleMultiSelect(e){
        alert("Assignment was submitted!")
        e.preventDefault();

        const payload = {
            answer:multiSelect,
            submitted: true,
            user_id: userID,
            type:'MS'
        }


        const requestOptions =({
            method:'PATCH',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(payload)
        })
    

        fetch('http://localhost:8000/assign/submit', requestOptions)
        .then(res => res.json())
        .then(data => setPostId(data.id))
        .catch(err => console.log(err))  
    }


    function handleFillIn(e){
        alert("Assignment was submitted!")

        e.preventDefault();

        const payload={
            answer:fillInBlank,
            submitted: true,
            user_id: userID,
            type:'FIB'
        }

        const requestOptions =({
            method:'PATCH',
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
         <h1>Hello {name}</h1>
        {questions && questions.map(question =>{
             
            return(
                <>  
                    {!question.submitted?
                    <>
                        {question.type === 'MC'?(
                            <Assignment1 
                                handleMultipleChoice={handleMultipleChoice}
                                multipleChoice={multipleChoice}
                                radioButtonValue={radioButtonValue}
                                question={question}
                            />
                        
                            )
                            :question.type === 'MS'?(
                            <Assignment2
                                question={question}
                                handleMultiSelect={handleMultiSelect}
                                checkBoxValue={checkBoxValue}
                            />
                            )
                            :(
                            
                            <Assignment3
                                question={question}
                                handleFillIn={handleFillIn}
                                fillInValue={fillInValue}
                            />
                            )
                        } 
                    </>
                    :<h1>Question is submitted. Awaiting Instructor feedback</h1>
                    }
                </>
            )
        })}
        </>
    )

}

export default StudentPage
