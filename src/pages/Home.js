import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";

import Card from "../components/card/Card";

function Home() {
  useEffect(() => {
    fetch(" https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setData(json.posts);
      });
  }, []);
  const [data, setData] = useState([]);
  return (
    <>
      <Navigation />
      <div className="content">
        <div className="card-grid">
          {data.length === 0 ? (
            <p>Still Fetching</p>
          ) : (
            <>
              {data.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
