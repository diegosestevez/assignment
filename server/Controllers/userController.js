const User = require('./../Models/userModel');
const assignment = require('./../Controllers/assignmentController');
const jwt = require('jsonwebtoken');
const utils = require('./../utils');

let userObj = [
    {
        name: 'Joe Schmoe',
    },
    {
        name: 'Karl Gustav',
        usertype: 'Student',
        password: '123456'
    },
    {
        name: 'Katie Clues',
        usertype: 'Student',
        password: 'abcdef'
    },
    {
        name: 'Mike Naegi',
        usertype: 'Student',
        password: 'password'
    }
]

let assignObj = [
    {
        title: "When Was BCIT's 50th-annniversary celebration?",
        type:'MC',
        options: ["2016", "1976", "2002", "1999"],
        submitted: false,
        score: 0,
        answer: ''
    },
    {
        title: "Which of the following services does the LTC provide? Select all that apply.",
        type: 'MS',
        options: ['Technicall Illustration', 'Instructional Design', 'Financial Advice', 'Admission and Registration', 'Audio-visual Loans'],
        submitted: false,
        score: 0,
        answer: ''
    },
    {
        title: "The current Prime Minister in Canada is (include the starting year for the PM)?",
        type: 'FIB',
        options: [],
        submitted: false,
        score: 0,
        answer: ''
    },
];


exports.createDefaultUsers = async () =>{
    try{
        const users = await User.find();

        if(users.length < 4){
            userObj.forEach((i)=>{
                const newUser = new User(i)
    
                newUser.save().then( data => {
                 console.log('new user created!')
                 console.log(data)
    
                 if(data.usertype === 'Student'){
                     assignObj.forEach((i)=>{
                        assignment.createAssignment({
                             user_id: data._id,
                             name: data.name,
                             title: i.title,
                             type: i.type,
                             options: i.options,
                             submitted: i.submitted,
                             score: i.score,
                             answer: i.answer
                       })
                   })
                 }
                }).catch(err =>{
                    throw new Error(`${err} assignments were not created`);
                })       
            })
        }
    }catch(err){
        res.status(404).json({
            message:'assignment were not created',
            error: err
        })
    } 
}


exports.getAllUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({
            message: 'success',
            users
        })
    }catch(err){
        res.status(400).json({
            message:'failed',
            error: err
        })
    }
}


exports.deleteAllUsers = async (req, res) => {
    try{
        const users = await User.deleteMany({})
        res.status(204).json({})
    }catch(err){
        res.status(400).json({
            message: 'something went really wrong if you are seeing this',
            error: err
        })
    }
}


exports.createUserToken = async (req, res) => {
    const user = req.body.name;
    const pwd = req.body.password;

    try{

        const matchedUser = await User.findOne({name:user, password:pwd})

        console.log(matchedUser);

        if(!user || !pwd) {
            return res.status(400).json({
                error: true,
                message: 'Username or Password required'
            });
        }

        if(matchedUser === null) {
            return res.status(401).json({
                error: true,
                message: 'Username or Password is wrong'
            })
        }


        //generate token
        const token = utils.generateToken(matchedUser);

        const getUserObj = utils.getCleanUser(matchedUser);

        return res.json({user: getUserObj, token});
    
    }catch(err){
        res.status(404).json({
            message: 'something went wrong',
            error: err
        })
    }

}





exports.verifyUserToken = async (req, res) => {

    var token = req.query.token;

    try{
        
        if (!token) {
            return res.status(400).json({
            error: true,
            message: "Token is required."
            });
        }
    
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) return res.status(401).json({
                error:true,
                message: 'Invalid Token'
            })
        })
    
       
            var getUserObj = utils.getCleanUser(userObj[2]);
            return res.json({ user: getUserObj, token });

    }catch(err){
        res.status(404).json({
            message: 'something went wrong',
            error: err
        })
    }
    
    
  

}