import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./page/Home/Home";
import { useEffect } from "react";
import { getAllPost } from "./app/features/post/postApiSlice";
import { getAllStory } from "./app/features/story/storyApiSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Dispatching getAllStory...");
    dispatch(getAllPost());
    dispatch(getAllStory())
      .unwrap()
      .then((response) => {
        console.log("getAllStory Response:", response);
      })
      .catch((error) => {
        console.error("getAllStory Error:", error);
      });
  }, [dispatch]);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
