/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { dbURL, port } from './utils/config';
import apiRoutes from './routes';
import usersRoute from './usersRoute';

const app = express();

mongoose.connect(dbURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.log);
db.once('open', () => { console.log('DB connection successful'); });

app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', apiRoutes);
app.use('/api/users', usersRoute);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello villagers😀',
    hint: 'Try navigating to /api/***😛 , consume away🚀',
  });
});

app.listen(port, () => {
  console.log('Server is running on port', port);
  console.log(`http://localhost:${port}`);
});
