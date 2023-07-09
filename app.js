const express = require('express');
const app = express();
const port = 5000;

// Define a basic route
app.get('/', (req, res, next) => {
  res.send('Hello, this is my first deployment');
});

// Define a basic route
app.get('/basic', (req, res) => {
    res.send('Hello, this is my basic routes and deployment..');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});