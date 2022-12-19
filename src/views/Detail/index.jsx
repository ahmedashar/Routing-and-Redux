import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Detail() {
  const [postDetail, setPostDetail] = useState([]);
  const { postId } = useParams();
  const navigate = useNavigate();

  // get data from redux store
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((res) => setPostDetail(res));
  }, []);

  return (
    <div style={{ border: "2px solid white", backgroundColor: theme }}>
      <h1>Detail Page</h1>
      <h3>{postDetail.title}</h3>
      <p>{postDetail.body}</p>
      <span>Post ID: {postDetail.id}</span>
      <span>User ID: {postDetail.userId}</span>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}
