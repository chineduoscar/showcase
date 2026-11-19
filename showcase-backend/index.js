import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.route.js";
import authRoute from "./routes/auth.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);
app.use("/api/contact", contactRoute);
app.use("/api/auth", authRoute);

const start = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

start();
