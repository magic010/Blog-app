import React from "react";
import { Link } from "react-router-dom";
import "./post.css";
function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c, inx) => (
            <span key={inx} className="postCat">
              {c.name}
            </span>
          ))}
        </div>
        <span className="PostTitle">
          <Link className="link" to={`post/${post._id}`}>
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}

export default Post;
