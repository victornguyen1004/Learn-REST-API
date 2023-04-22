import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import { usersRouter, studentsRouter } from './routes/index.js';


const app = express();
app.use(express.json());
const port = process.env.PORT ?? 3000;

app.use('/users', usersRouter);
app.use('/students', studentsRouter);

app.get('/', (req, res) => {
  res.send('Hahahihi')
})
// Connect to MongoDB
// mongoose.connect(
//   "mongodb+srv://client:passla123@cluster0.ny901qx.mongodb.net/?retryWrites=true&w=majority"
// )
app.listen(port, async() => {
  console.log(`listening on port ${port}`)
});
