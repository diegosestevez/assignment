# MARKING APP

Created using the MERN stack (MongoDB, Express, ReactJS & NodeJS) + Material UI styling framework

## Description:

This application will contain 1 instructor and 3 student accounts that are created dynamically from a database. 
Students will be able to see 3 separate assignments and can submit answers for each. Once submitted, students will not be able to update their answers and it will be sent to the instructor for evaluation. Once evaluated by the instructor, students should be about to see a numerical score in place of where their assignment used to be.
Instructors will be able to see each student and their corresponding assignment. Initially they should see that each assignment is unsubmitted until a student submits an assignment. Once submitted by the student, the instructor will be able to mark that submission using a numerical value (from 1 to 10). Once the instructor has submitted the marks for the assessed assignment they will not be able to update that assignment score and students will be able to see how they have been marked.

## Steps to run this project 
- Clone the repo make and sure you are on the **‘main’** branch
- Install [Docker](https://www.docker.com/) onto your OS (if you haven’t already)
- Open up the project using VScode or your preferred text editor
- Go to the **Server** directory and scan the **server.js** file
- Make sure that the following line `const connectionString = process.env.DB_DOCKER` is **uncommented** and that `const connectionString = process.env.DB_LOCAL` is **commented** (or deleted if you don’t plan on running the application via npm)
- Now return to the **root directory** and run `docker-compose up`
- The Application should now run on **localhost:3000**
- The application will initially have **no users populated** in the database. To create them, click on the **Create Users** button at the login page. Doing so will create **1 Instructor** account and **3 student accounts** (these accounts will persist if docker-compose is run multiple times)
- Password for all users is: **123456** 
- 	Usernames are (case sensitive):
    -  **Joe Schmoe** (instructor)
    -  **Karl Gustav**
    -  **Katie Clues**
    -  **Mike Naegi**

## Requirements Fullfilled
- ReactJS for the frontend
-	NodeJs for the backend
-	MongoDB for the Database
-	Dockerized Application
-	2 User roles: 1 Instructor and 3 Students
-	3 Assignments for each student (cannot be edited after submission)
    - 1 Multiple Choice
    - 1 Multi-Select
    - 1 Short Answer that can only take submissions like [three 1991, five 19923]
- Instructor can mark student assignments using a numerical value (cannot be edited after submission)

## Bonuses Fulfilled
- Login screen for instructor and students to log in
- When users log in depending on the role they will have different access to the application
