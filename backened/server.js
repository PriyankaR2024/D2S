const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory array to store users
const users = [];

// Route for signup
app.post('/signup', (req, res) => {
  const { username, phone, email, password, role, licenseNumber, vehicleType, vehicleNumber } = req.body;

  const newUser = {
    id: uuidv4(), // unique ID
    username,
    phone,
    email,
    password,
    role,
    licenseNumber: role === 'Driver' ? licenseNumber : null,
    vehicleType: role === 'Driver' ? vehicleType : null,
    vehicleNumber: role === 'Driver' ? vehicleNumber : null
  };

  users.push(newUser);

  console.log('New User Signed Up:', newUser);
  res.status(200).json({ message: 'Signup successful', userId: newUser.id });
});

// Root route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});
