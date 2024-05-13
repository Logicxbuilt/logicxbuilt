const express = require('express');
const app = express();
const port = 3000;

// Define a route to handle root URL
app.get('/', (req, res) => {
  // Send "Hello, World!" as the response
  res.send('<h1>Hello, World!</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
