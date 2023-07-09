const express = require('express');
const app = express();
const port = 5000;

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, shopping!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});