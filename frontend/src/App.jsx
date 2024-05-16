import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Backend day 2</h1>
      <p>JOKES:{jokes.length}</p>
      {jokes.map((index, item) => (
        <div key={index.id}>
          <h1>{index.title}</h1>
          <p>{index.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
