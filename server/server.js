// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Middleware for parsing JSON in request body
const goalsRoutes = require('./routes/goalsRoute');
const path = require('path');
const cors = require('cors');


//const routes = require('./routes'); // Assume you have a separate routes folder

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/DigitalPlannerProject', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Middleware
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // enable session cookies
}));
app.use(bodyParser.json());



app.use('/api/goals', goalsRoutes);



app.use(express.static('client/public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});
