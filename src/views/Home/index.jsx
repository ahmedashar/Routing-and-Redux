import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//
//
export default function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  //   get values from store
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);
  return (
    <div
      style={{
        width: "600px",
        minHeight: "600px",
        border: "6px solid white",
        backgroundColor: theme,
      }}
    >
      <h1>Home</h1>
      <button onClick={() => navigate("/about")}>About Us</button>
      <button onClick={() => navigate("/contact")}>Contact Us</button>

      <div>
        {posts.map((item) => {
          const { title, id, userId } = item;
          return (
            <div style={{ border: "1px solid white", margin: "5px" }}>
              <h5>{title}</h5>
              <span>post: {id}, </span>
              <span>user ID: {userId}</span>
              <br />
              <button
                onClick={() => {
                  navigate(`/detail/${id}`);
                }}
              >
                Description
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
