import { useState, useEffect } from "react";

export function usePagination() {
  useEffect(() => {
    fetch(" https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setData(json.posts);
      });
  }, []);

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  // get index of first and last inoder to slice to remain with only x number
  let lastindex = postsPerPage * currentPage;
  let firstindex = lastindex - postsPerPage;
  const posts = data?.slice(firstindex, lastindex);
  const pagenumbers = [];

  for (var i = 1; i < Math.ceil(data?.length / postsPerPage); i++) {
    pagenumbers.push(i);
  }

  const changePage = (num) => setCurrentPage(num);

  return { posts, changePage, setPostsPerPage, pagenumbers };
}
