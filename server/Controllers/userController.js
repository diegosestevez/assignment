const User = require('./../Models/userModel');
const assignment = require('./../Controllers/assignmentController');


let userObj = [
    {
        name: 'Joe Schmoe',
        username: 'ms1',
        email: 'Joe_Schmoe@gmail.com'

    },
    {
        name: 'Karl Gustav',
        username: 'jm1',
        usertype: 'Student',
        email: 'Karl_Gustav@gmail.com'

    },
    {
        name: 'Katie Clues',
        username: 'rh1',
        usertype: 'Student',
        email: 'Katie_Clues@gmail.com'

    },
    {
        name: 'Mike Niaegi',
        username: 'ab1',
        usertype: 'Student',
        email: 'Mike Niaegi@gmail.com'

    }
]

// let questionData = [
//     {
//         title: "When Was BCIT's 50th-annniversary celebration ?",
//         options: ["2016", "1976", "2002", "1999"]
//     },
//     {
//         title: "Which of the following services does the LTC provide ? Select all that apply.",
//         type: 'MC',
//         options: ['Technicall Illustration', 'Instructional Design', 'Financial Advice', 'Admission and Registration', 'Audio-visual Loans']
//     },
//     {
//         title: "The current Prime Minister in Canada is (include the starting year for the PM).",
//         type: 'FIB',
//     }
// ]

let assignObj = [
    {
        title: "When Was BCIT's 50th-annniversary celebration ?",
        type:'MC',
        options: ["2016", "1976", "2002", "1999"]

    },
    {
        title: "Which of the following services does the LTC provide ? Select all that apply.",
        type: 'MS',
        options: ['Technicall Illustration', 'Instructional Design', 'Financial Advice', 'Admission and Registration', 'Audio-visual Loans']

    },
    {
        title: "The current Prime Minister in Canada is (include the starting year for the PM).",
        type: 'FIB',
        options: []
    },
];


exports.createDefaultUsers = async () =>{
    console.log('Thanks Omkar');

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
                         title: i.title,
                         type: i.type,
                         options: i.options
                   })
               })
             }
            }).catch(err =>{
                console.log(`${err} assignments were not created`);
            })
               
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