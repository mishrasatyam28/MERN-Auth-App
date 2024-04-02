import dotenv from "dotenv";
import express, { json } from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

mongoose
  .connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("MongoDb Connected!!!");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
