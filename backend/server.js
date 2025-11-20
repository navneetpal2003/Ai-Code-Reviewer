require('dotenv').config();
const app = require('./src/app')
const cors = require('cors');
const express = require('express');
const app = express();

// Allow requests from your Netlify frontend
app.use(cors({
    origin: 'https://codereviewerbyai.netlify.app', 
    optionsSuccessStatus: 200
}));

// Make sure your server listens on the port Render assigns
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
