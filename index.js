import express from "express";
import * as dotenv from "dotenv";
import newrouter from "./routes/user-route.js";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

app.use(express.json());
//const allowedOrigins = ["http://localhost:3000"];

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use("/api", newrouter);
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    app.listen(port, () => {
      console.log(`server is running in port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connectDB();
