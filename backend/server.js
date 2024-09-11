import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept json data in a req.body


app.post("/api/products", async (req, res) => {
    const product = req.body; // user will send this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" })
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct })
    } catch (error) {
        console.error("Error in Create product:",)
    }
});

/* console.log(process.env.MONGO_URI); */ // see if the api is accesible

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000 , nothing changes if nothing changes");
});