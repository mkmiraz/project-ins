import Post from "../../components/Post/Post";
import Sidebar from "../../components/Sidebar/Sidebar";
import StorySliuder from "../../components/StorySlider/StorySliuder";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

const Home = () => {
  return (
    <>
      <div className="main_body flex items-start justify-end">
        <Sidebar />
        <div className="content_area h-fit flex-1 flex flex-col justify-start items-center gap-4 ml-[340px] ">
          <StorySliuder />
          <div className="post_area w-full h-fit pr-40 flex flex-col items-end">
            <Post />
          </div>
        </div>
        <div className="right w-[580px] h-fit py-8">
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default Home;
