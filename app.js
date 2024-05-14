// Import required modules
const express = require('express');

// Create Express app
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route for the home page
app.get('/', (req, res) => {
  // Render the 'index.ejs' template
  res.render('index', { message: 'Hello, World!' });
});

// Start the server
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
