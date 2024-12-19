require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;
const connectToDatabase = require("./db/conn");
const posts = require('./routes/posts')

connectToDatabase();

app.use('/api/posts', posts)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});