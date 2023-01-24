// import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";

import Card from "../components/card/Card";
import { usePagination } from "../hooks/usePagination";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Home() {
  const { posts, pagenumbers, changePage } = usePagination();
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <div className="background">
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          toggle
        </button>
        <Link to="/login">login</Link>
        {/* <Navigation /> */}

        <div className="card-container">
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
            className="page-num text"
            key={item}
            onClick={() => changePage(item)}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Home;
