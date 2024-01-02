// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");


// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "signup"
// });

// db.connect(err => {
//     if (err) {
//         console.error('MySQL connection error:', err);
//     } else {
//         console.log('Connected to MySQL database');
//     }
// });

// app.post('/login', (req, res) => {

//     const { name, email, password } = req.body; // Destructuring request body

//     const userQuery = 'SELECT * FROM users WHERE username = ?';
//     db.query(userQuery, [username], async (err, result) => {
//         if (err) {
//             console.error('MySQL query error:', err);
//             return res.json({ error: 'Error fetching user' });
//         }

//         if (result.length === 0) {
//             return res.json({ error: 'User not found' });
//         }

//         // Compare the password using bcrypt
//         const match = await bcrypt.compare(password, result[0].password);

//         if (match) {
//             // Generate a JWT token
//             const token = jwt.sign({ username: result[0].username }, 'your-secret-key');
//             return res.json({ success: true, token });
//         } else {
//             return res.json({ error: 'Incorrect password' });
//         }
//     });
// });

// const PORT = process.env.PORT || 8081;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });