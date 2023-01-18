import "./App.scss";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
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
  return (
    <div className="container">
      <Navigation />
      <div className="content">
        <div className="card-grid">
          {data.length === 0 ? (
            <p>Still Fetching</p>
          ) : (
            <>
              {data.slice(10, 14).map((item) => (
                <div className="card" key={item.id}>
                  <div className="title-section">
                    <h3>{item.title}</h3>
                  </div>

                  <div className="body-section">
                    <p>{item.body}</p>

                    <div className="sub-section">
                      <div className="reactions">
                        <BiStar />
                        <span>{item.reactions}</span>
                      </div>
                      <div className="tags">
                        {item.tags.map((item, index) => (
                          <small key={index}>{item} | </small>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <Link to="/about">Read More</Link>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
