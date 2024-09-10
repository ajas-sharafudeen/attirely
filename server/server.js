const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require('./routes/auth/auth-routes');
const adminProductsRouter = require('./routes/admin/products-routes');

require('dotenv').config();

// Creates a database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const app = express();
const PORT = process.env.PORT || 5000;

//cors configuration
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Cache-Control',
      'Expires',
      'Pragma',
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/admin/products', adminProductsRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
