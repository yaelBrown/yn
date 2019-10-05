const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
const config = require('./config/config');
const bodyParser = require('body-parser');

// Init express
const app = express();
const port = process.env.PORT || 5000;

// Endpoint and Route handlers
// app.get('/', (req, res) => res.send("Hello World!"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Static endpoint handler
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/', require('./routes/api/test'));


// Connect to mongoDB
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => console.log(err));
db.once('open', () => {
  require('./routes/api/test');
  console.log("db listening on port: " + config.PORT);
});

// Listen on a port
app.listen(port, () => console.log(`Server listening on port: ${port}`));