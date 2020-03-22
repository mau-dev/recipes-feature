const express = require('express');

const app = express();

const connectDB = require('./config/db');

connectDB();

// Init middleware for the body parser
app.use(
    express.json({
        extended: false
    })
);

app.get('/', (req, res) => res.send(`API Running`));


//define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/recipes', require('./routes/api/recipes'));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));