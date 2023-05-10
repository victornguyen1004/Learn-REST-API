import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import {
  usersRouter,
  studentsRouter,
  bussesRouter,
  productsRouter,
  customersRouter,
} from "./routes/index.js";
import connect from "./database/database.js";
import checkToken from "./authentication/auth.js";
import cors from "cors";

const app = express();
app.use(checkToken); // shield, guard
app.use(express.json());
const port = process.env.PORT ?? 3000;

// const corsOptions ={
//    origin:'*',
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }
// app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(cors());

app.use("/users", usersRouter);
app.use("/students", studentsRouter);
app.use("/busses", bussesRouter);
app.use("/products", productsRouter);
app.use("/customers", customersRouter);

app.get("/", (req, res) => {
  res.send("Hahahihi");
});

app.listen(port, async () => {
  await connect();
  console.log(`listening on port ${port}`);
});
