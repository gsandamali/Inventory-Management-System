import express from 'express';
import mongoose from 'mongoose';
import { apiRoutes } from './routes/api';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;

// app.use(contextPath, router)
app.use(express.json());

app.get('/', (req, res) => {
  res.send("server is running.");
});

app.use('/api', apiRoutes);

app.listen(port, () => {
  mongoose.connect(mongoUri);
  console.log(`connected to mongodb`);
  console.log(`service is running on port ${port}.`);
});
