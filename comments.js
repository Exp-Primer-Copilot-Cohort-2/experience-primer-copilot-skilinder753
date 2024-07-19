// Create web server
// Create a route to handle POST request to /comments
// Add a new comment to the list of comments
// Return the list of comments

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const comments = [];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);git add comments.js
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Run the server
// Open a browser and navigate to http://localhost:3000/comments
// Send a POST request to http://localhost:3000/comments with the following JSON payload
// {
//     "author": "John",
//     "message": "Hello, World!"
// }
// Refresh the browser and you should see the new comment