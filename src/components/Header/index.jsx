import { setTheme } from "../../store/actions/themeActions";
import { useDispatch } from "react-redux";
export default function Header() {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex" }}>
      <div
        onClick={() => {
          dispatch(setTheme("red"));
        }}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      ></div>
      <div
        onClick={() => {
          dispatch(setTheme("pink"));
        }}
        style={{ width: "100px", height: "100px", backgroundColor: "pink" }}
      ></div>
      <div
        onClick={() => {
          dispatch(setTheme("brown"));
        }}
        style={{ width: "100px", height: "100px", backgroundColor: "brown" }}
      ></div>
    </div>
  );
}
