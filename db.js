import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB")
const handleError = error => console.log(`On Problem : ${error}`)
db.once("open", handleOpen);
db.on("error", handleError);