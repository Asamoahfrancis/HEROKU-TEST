import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());

const myPORT = process.env.PORT || 5000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(myPORT, () => {
  console.log("App is listening on port " + myPORT);
});
