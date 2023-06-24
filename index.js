const express = require('express')
const app = express()
const port = 3001

const USERS = [];

const QUESTIONS = [
  {
    title: "Two states",
    description: "Given an array, return the maximum of the array.",
    testCases: [
      {
        input: "[1, 2, 3, 4, 5]",
        output: "5"
      }
    ]
  },
  {
    title: "Palindrome Check",
    description: "Check if a given string is a palindrome.",
    testCases: [
      {
        input: "'racecar'",
        output: "true"
      },
      {
        input: "'hello'",
        output: "false"
      }
    ]
  },
  {
    title: "FizzBuzz",
    description: "Write a program that prints the numbers from 1 to 100. But for multiples of three, print 'Fizz' instead of the number, and for the multiples of five, print 'Buzz'. For numbers which are multiples of both three and five, print 'FizzBuzz'.",
    testCases: [
      {
        input: "3",
        output: "'Fizz'"
      },
      {
        input: "5",
        output: "'Buzz'"
      },
      {
        input: "15",
        output: "'FizzBuzz'"
      },
      {
        input: "7",
        output: "7"
      }
    ]
  },
  {
    title: "Factorial",
    description: "Write a function to calculate the factorial of a given non-negative integer.",
    testCases: [
      {
        input: "5",
        output: "120"
      },
      {
        input: "0",
        output: "1"
      },
      {
        input: "10",
        output: "3628800"
      }
    ]
  }
];



const SUBMISSION = [

]

app.post('/signup', function(req, res) {
  // Add logic to decode body
  // body should have email and password


  //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesnt exist)


  // return back 200 status code to the client

  const { username, email, password } = req.body;
  const existingUser = USERS.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const newUser = {
    username, 
    email,
    password
  };

  USERS.push(newUser);

  return res.status(200).send("User Added");

})

app.post('/login', function(req, res) {
  // Add logic to decode body
  // body should have email and password

  const { email, password } = req.body;


  // Check if the user with the given email exists in the USERS array
  // Also ensure that the password is the same

  const user = USERS.find((user) => user.email === email)

  // If the password is the same, return back 200 status code to the client
  // Also send back a token (any random string will do for now)
  // If the password is not the same, return back 401 status code to the client

  if (!user) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  // Compare the provided password with the stored password
  if (user.password !== password) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  // Login successful
  return res.status(200).json({ message: 'Login successful', user });

})

app.get('/questions', function(req, res) {

  //return the user all the questions in the QUESTIONS array
  res.json(QUESTIONS)
})

app.get("/submissions", function(req, res) {
   // return the users submissions for this problem
  
});


app.post("/submissions", function(req, res) {
   // let the user submit a problem, randomly accept or reject the solution
   // Store the submission in the SUBMISSION array above
  res.send("Hello World from route 4!")
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})