import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";

const Single = () => {
  const location = useLocation();

  const id = location.state?.id;
  useEffect(() => {
    console.log(id);
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, [id]);
  const [data, setData] = useState({});
  return (
    <div>
      <Navigation />
      <div className="content">
        <div className="text-content">
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Single;
