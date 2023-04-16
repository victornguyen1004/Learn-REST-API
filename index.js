import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import usersRouter from './routes/users.js';

const app = express();
const port = process.env.PORT ?? 3000;

app.use('/gears', usersRouter);

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
