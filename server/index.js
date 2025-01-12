const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const compressRoutes = require('./routes/compress');

const app = express();
const corsOptions = {
  origin: "https://frontend-71cd.onrender.com",
}
// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB setup
connectDB();

// Routes
app.use(compressRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
