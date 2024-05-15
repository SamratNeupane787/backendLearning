require("dotenv").config();

const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/x", (req, res) => {
  res.send("hello world");
});

app.get("/login", (req, res) => {
  res.send("<h1>Welcome to Login Page!</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>You are on youtube!</h2>");
});
app.listen(process.env.PORT, () => {
  console.log(`Server started at ${port}`);
});
