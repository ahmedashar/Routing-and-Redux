import "./App.css";
import Header from "./components/Header";
// for redux
import { Provider } from "react-redux";
import store from "./store";

import Router from "./config/router";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Header />
          <Router />
        </header>
      </div>
    </Provider>
  );
}

export default App;

// React Router Dom
// 1. Basic Routing
//   a) make router.js file in config
//   b) import createBrowserRouter and RouterProvider from react-router-dom
//   c) use createBrowserRouter and Defines path with element(component), store in const router
//   d) return RouterProvider with router as prop

// 2. Programmatically Routing (through Button)
//    a) import useNavigate from react-router-dom
//    b) const navigate = useNavigate()
//    c) call by using, navigate("/about")
