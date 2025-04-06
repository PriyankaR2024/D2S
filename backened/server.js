const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static frontend files (like signup.html)
app.use(express.static(path.join(__dirname, '..')));

const USERS_FILE = path.join(__dirname, 'users.json');

// === GET Route for Home ===
app.get('/', (req, res) => {
  res.send('D2S backend is live!');
});

// === GET Route for Signup (for testing in browser) ===
app.get('/signup', (req, res) => {
  res.send('Signup route is active. Please use a POST request through the form.');
});

// === POST Route for Signup Form ===
app.post('/signup', (req, res) => {
  const { username, phone, email, password, role, licenseNumber, vehicleType, vehicleNumber } = req.body;

  const newUser = {
    id: `d2s-${Math.floor(Math.random() * 10000)}`,
    username,
    phone,
    email,
    password,
    role
  };

  if (role === "Driver") {
    newUser.licenseNumber = licenseNumber;
    newUser.vehicleType = vehicleType;
    newUser.vehicleNumber = vehicleNumber;
  }

  fs.readFile(USERS_FILE, 'utf8', (err, data) => {
    let existingUsers = [];

    if (!err && data) {
      try {
        existingUsers = JSON.parse(data);
      } catch (parseErr) {
        console.error('Error parsing users.json:', parseErr);
      }
    }

    existingUsers.push(newUser);

    fs.writeFile(USERS_FILE, JSON.stringify(existingUsers, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing to file:', writeErr);
        return res.status(500).json({ message: 'Signup failed, please try again.' });
      }

      console.log("New user saved:", newUser);
      res.json({
        message: "Signup successful",
        userId: newUser.id
      });
    });
  });
});

// === Start the Server ===
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
