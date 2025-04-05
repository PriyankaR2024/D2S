const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory user list
let users = [];

// === SIGNUP ROUTE ===
app.post('/signup', (req, res) => {
  const { username, phone, email, password, role } = req.body;
  
  const newUser = {
    id:`d2s-${Math.floor(Math.random()*10000)}`,
    username,
    phone,
    email,
    password,
    role,
  };

  users.push(newUser);
  console.log("New user signed up:", newUser);

  res.json({
    message: "Signup successful",
    userId: newUser.id
  });
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});
