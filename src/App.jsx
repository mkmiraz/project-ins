import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./page/Home/Home";
import { useEffect } from "react";
import { getAllPost } from "./app/features/post/postApiSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
