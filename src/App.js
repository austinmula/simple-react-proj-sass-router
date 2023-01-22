// import "./App.scss";
import "./styles/main.scss";
import { useEffect, useState } from "react";
// import Navigation from "./components/Navigation";
import { BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";

function App() {
  useEffect(() => {
    fetch(" https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setData(json.posts);
      });
  }, []);

  const [data, setData] = useState([]);

  return <div></div>;
}

export default App;
