// import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";

import Card from "../components/card/Card";
import { usePagination } from "../hooks/usePagination";

function Home() {
  const { posts, pagenumbers, changePage } = usePagination();
  return (
    <>
      <Navigation />
      <div className="content">
        <div className="card-grid">
          {posts?.length === 0 ? (
            <p>Still Fetching</p>
          ) : (
            <>
              {posts?.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </>
          )}
        </div>
        {pagenumbers.map((item) => (
          <span
            className="page-num"
            key={item}
            onClick={() => changePage(item)}
          >
            {item}
          </span>
        ))}
      </div>
    </>
  );
}

export default Home;
