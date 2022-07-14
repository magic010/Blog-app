import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

function Home() {
  const [posts, setposts] = useState([]);
  const {search} = useLocation();
  // console.log(search);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("http://localhost:5000/api/post"+search);
      setposts(res.data);
    };
    fetchPost();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts post={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
