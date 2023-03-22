const express = require('express');
const path = require('path');

// Initialize our app variable by setting it to the value of express()
const app = express();
const PORT = process.env.port || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//require routes
require('./routes/api-route')(app);
require('./routes/index-route')(app);

app.use(express.static(path.join(__dirname + './public')))

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


