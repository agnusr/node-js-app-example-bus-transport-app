const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Mock transportation data
const transportationData = [
  { from: 'Thiruvananthapuram', to: 'Kochi', time: '6:00 AM', fare: '₹300' },
  { from: 'Kochi', to: 'Kozhikode', time: '7:30 AM', fare: '₹250' },
  { from: 'Kozhikode', to: 'Kannur', time: '9:00 AM', fare: '₹150' },
  { from: 'Kannur', to: 'Kasargod', time: '8:00 AM', fare: '₹200' },
  { from: 'Thiruvananthapuram', to: 'Kottayam', time: '5:30 AM', fare: '₹200' },
];

// Serve Login Page
app.get('/', (req, res) => {
  res.render('login');
});

// Handle Login Form Submission
app.post('/login', (req, res) => {
  const { name, password } = req.body;

  // Basic validation (for demonstration only)
  if (name && password) {
    res.render('routes', { name, transportationData });
  } else {
    res.send('Invalid Login. Please enter both name and password.');
  }
});

// Start Server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
