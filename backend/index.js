const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // Your MySQL password
  database: 'loginsignup',
  port: 3306
});


db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
});

// API for user signup
app.post('/signup', (req, res) => {
  const { name, phoneNumber, email, username, password } = req.body;

  // Check if the username or phone number already exists
  const checkUserExistsSql = 'SELECT * FROM signup WHERE username = ? OR phoneNumber = ?';
  db.query(checkUserExistsSql, [username, phoneNumber], (checkError, checkResults) => {
    if (checkError) {
      throw checkError;
    }

    if (checkResults.length > 0) {
      // User with the same username or phone number already exists
      return res.status(400).json({ message: 'User with the same username or phone number already has an account' });
    }

    // If no duplicate, proceed to insert the new user into the database
    const user = { name, phoneNumber, email, username, password };
    const insertUserSql = 'INSERT INTO signup SET ?';
    db.query(insertUserSql, user, (insertError, result) => {
      if (insertError) {
        throw insertError;
      }
      console.log('User Registered:', result);
      res.status(201).json({ message: 'User Registered successfully' });
    });
  });
});

// API for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Implement logic to verify login credentials in your database
  const sql = 'SELECT * FROM signup WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      throw err;
    }
    if (results.length === 1) {
      // User found, generate JWT token
      const token = jwt.sign({ username, email: results[0].email }, 'mc', { expiresIn: '1h' });

      // Send the token in the response
      res.status(200).json({ token, message: 'Login successful' });
    } else {
      // User not found or invalid credentials
      res.status(401).json({ message: 'Login failed' });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

