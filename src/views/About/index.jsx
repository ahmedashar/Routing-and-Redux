import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "600px",
        height: "600px",
        border: "6px solid white",
      }}
    >
      <h1>About</h1>
      {/* <button onClick={() => navigate("/")}>Home</button> */}
      {/* <button onClick={() => navigate("/contact")}>Contact Us</button> */}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
