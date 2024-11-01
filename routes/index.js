// Importing required modules
const express = require('express');
const router = express.Router()


router.get('/',(req,res) =>{
    res.send('index')
})

// const app = express();

// // Middleware for parsing JSON
// app.use(express.json());

// // Setting up a basic route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Express server!');
// });

// // Example of an additional route
// app.get('/api', (req, res) => {
//   res.json({ message: 'Hello from the API route!' });
// });

// // Setting up the server to listen on a specific port
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


module.exports = router