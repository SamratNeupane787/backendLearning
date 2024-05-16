import express from "express";
import { configDotenv } from "dotenv";
const app = express();

app.use(express.static("dist"));
// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

//get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A Joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another Joke",
      content: "This is a 2nd joke",
    },
    {
      id: 3,
      title: "Another (3rd) Joke",
      content: "This is 3rd joke",
    },
    {
      id: 4,
      title: "Another (4th) Joke",
      content: "This is 4th joke",
    },
    {
      id: 5,
      title: "Another (5rd) Joke",
      content: "This is 5th joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started at 3000 Port");
});
