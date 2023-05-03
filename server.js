import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import { usersRouter, studentsRouter } from './routes/index.js';
import connect from './database/database.js';


const app = express();
app.use(express.json());
const port = process.env.PORT ?? 3000;

app.use('/users', usersRouter);
app.use('/students', studentsRouter);

app.get('/', (req, res) => {
  res.send('Hahahihi')
})

app.listen(port, async() => {
  await connect()
  console.log(`listening on port ${port}`)
});
