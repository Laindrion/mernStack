import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (reg, res) => {
    res.send("Send is ready");
});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000 , nothing changes if nothing changes");
});