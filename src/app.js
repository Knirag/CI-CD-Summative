const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;
const mongoUri =
  process.env.MONGO_URI || "mongodb://localhost:27017/ci-cd-summative";

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/blogs", blogRoutes);

// Health check endpoint
app.get("/health", (req, res) => res.status(200).send("OK"));

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  });

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception thrown:", error);
  process.exit(1);
});

module.exports = app;
