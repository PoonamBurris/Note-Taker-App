const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api-route');
const htmlRoutes = require('./routes/index-route');

// Initialize our app variable by setting it to the value of express()
const app = express();
const PORT = process.env.port || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//require routes
app.use('/api', apiRoutes);
app.use('/api', htmlRoutes);


app.use(express.static(path.join(__dirname + './public')))

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


