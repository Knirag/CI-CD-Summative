const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config();
const app = express();


app.use(express.json());
app.use("/auth", authRoutes);
app.use("/blogs", blogRoutes);

// Health check endpoint
app.get("/health", (req, res) => res.status(200).send("OK"));

module.exports = app;
