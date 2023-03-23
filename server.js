const express = require('express');

// Initialize our app variable by setting it to the value of express()
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//require routes
app.use(require('./routes'));

app.use(express.static('./public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


