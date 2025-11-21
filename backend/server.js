require('dotenv').config();
const app = require('./src/app'); // 1. Import the app you built in app.js

// 2. Use the port Render gives us, or 3000 if on localhost
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});