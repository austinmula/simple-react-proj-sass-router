import { useEffect, useState, useLayoutEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

const Single = () => {
  const location = useLocation();
  const params = useParams();
  let navigate = useNavigate();

  useLayoutEffect(() => {
    window.addEventListener("resize");
    return () => {
      window.removeEventListener("resize");
    };
  }, []);

  const id = location.state?.id;
  useEffect(() => {
    console.log(params);
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((e) => navigate.push("/"));
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
