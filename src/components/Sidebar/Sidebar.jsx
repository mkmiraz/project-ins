import { AiFillHome } from "react-icons/ai";
import titleImg from "../../assets/title.png";
import user from "../../assets/user.png";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import {
  LuHeart,
  LuSend,
  LuSquareActivity,
  LuSquarePlus,
} from "react-icons/lu";
import { FaBars, FaThreads } from "react-icons/fa6";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { BiBookmarkMinus } from "react-icons/bi";
import { GoMoon } from "react-icons/go";
import { TbMessageReport } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { createPost } from "../../app/features/post/postApiSlice";
import { deveImageUpload } from "../../helpers/cloudinary";
import Swal from "sweetalert2";
import { createStory } from "../../app/features/story/storyApiSlice";

const Sidebar = () => {
  // get dispatch
  const dispatch = useDispatch();
  // use state
  const [satting, setSatting] = useState(false);
  const [file, setFile] = useState(null);
  const [postModal, setPostModal] = useState(false);
  const [story, setStory] = useState(false);
  const [authorPhoto, setAuthorPhoto] = useState(null);
  const [postPhoto, setPostPhoto] = useState(null);
  const [input, setInput] = useState({
    authorName: "",
    postContent: "",
  });
  // get input values
  const hendleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Post create form submit
  const handlePostCreate = async (e) => {
    e.preventDefault();
    // Author Photo
    const authorFile = await deveImageUpload({
      file: authorPhoto,
      preset: "shop-app",
      api_key: "dl960tfs5",
    });
    // Post Photo
    const postFile = await deveImageUpload({
      file: postPhoto,
      preset: "shop-app",
      api_key: "dl960tfs5",
    });
    dispatch(
      createPost({
        ...input,
        authorPhoto: authorFile.secure_url,
        postPhoto: postFile.secure_url,
      })
    );
    Swal.fire({
      icon: "success",
      title: "Post Create successfull",
      showConfirmButton: false,
      timer: 500,
      position: "top-center",
    });
    setInput({
      authorName: "",
      postContent: "",
    });
    setPostModal(false);
  };

  // handle story
  const handleStory = async (e) => {
    e.preventDefault();
    const storyFile = await deveImageUpload({
      file: file,
      preset: "shop-app",
      api_key: "dl960tfs5",
    });
    Swal.fire({
      icon: "success",
      title: "Story Create successfull",
      showConfirmButton: false,
      timer: 500,
      position: "top-center",
    });
    dispatch(createStory({ ...input, storyPhoto: storyFile.secure_url }));
    setStory(false);
  };

  // satting modal show hide
  const handleSattingModel = () => {
    if (satting) {
      setSatting(false);
    } else {
      setSatting(true);
    }
  };
  return (
    <>
      {/* post modat Start */}
      <Modal isOpen={postModal}>
        <div className="w-[400px] h-[400px]  z-50 rounded-lg shadow-lg bg-black bg-opacity-40 fixed bottom-0 right-0 top-0 left-0 m-auto">
          <div className="title flex justify-between p-5">
            <h2 className="text-white">Create New Post</h2>
            <FaTimes
              onClick={() => setPostModal(false)}
              className="text-white cursor-pointer"
            />
          </div>
          <form
            onSubmit={handlePostCreate}
            className="p-2 bg-black bg-opacity-90"
          >
            <div className="w-full flex flex-col p-2">
              <span className="text-yellow-50 text-xs">Author Name</span>
              <input
                name="authorName"
                value={input.authorName}
                onChange={hendleInputChange}
                className="py-1 px-2 outline-none rounded-sm bg-slate-600 bg-opacity-35 text-white mt-1"
                type="text"
              />
            </div>
            <div className="w-full flex flex-col p-2">
              <span className="text-yellow-50 text-xs">Author Photo</span>
              <input
                className="py-1 px-2 outline-none rounded-sm bg-slate-600 bg-opacity-35 mt-1"
                type="file"
                name="authouPhoto"
                onChange={(e) => setAuthorPhoto(e.target.files[0])}
              />
            </div>
            <div className="w-full flex flex-col p-2">
              <span className="text-yellow-50 text-xs">Post Content</span>
              <textarea
                className="py-1 px-2 outline-none rounded-sm bg-slate-600 bg-opacity-35 text-white mt-1"
                name="postContent"
                value={input.postContent}
                onChange={hendleInputChange}
              ></textarea>
            </div>
            <div className="w-full flex flex-col p-2">
              <span className="text-yellow-50 text-xs">Post Photo</span>
              <input
                className="py-1 px-2 outline-none rounded-sm bg-slate-600 bg-opacity-35 text-white mt-1"
                type="file"
                name="postPhoto"
                onChange={(e) => setPostPhoto(e.target.files[0])}
              />
            </div>
            <button className="py-2 px-4 mt-2 ml-2 mb-5 rounded-sm text-white text-sm box-decoration-slice bg-gradient-to-r from-amber-500 to-rose-600">
              Create Post
            </button>
          </form>
        </div>
      </Modal>
      {/* story upload modal */}

      <div className="sidebar w-[340px] h-screen px-3 py-5 fixed top-0 left-0 border-r  border-gray-900 flex flex-col">
        <div className="title p-2 ">
          <img
            className="w-[140px] h-[65px] object-contain"
            src={titleImg}
            alt=""
          />
        </div>
        <div className="menuArea  flex-1">
          <ul className="menuArea py-5 flex flex-col gap-1">
            <li className="">
              <a
                className="text-white flex justify-start  gap-2  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
                href="#"
              >
                <AiFillHome className="text-white text-2xl" />
                <span className="self-end mt-1 font-medium text-sm tracking-widest">
                  Home
                </span>
              </a>
            </li>
            <li className="">
              <a
                className="text-white flex justify-start  gap-2  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
                href="#"
              >
                <IoIosSearch className="text-white text-2xl" />
                <span className="self-end mt-1 font-medium text-sm tracking-widest">
                  Search
                </span>
              </a>
            </li>
            <li className="">
              -
              <a
                className="text-white flex justify-start  gap-2  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
                href="#"
              >
                <MdOutlineExplore className="text-white text-2xl" />
                <span className="self-end mt-1 font-medium text-sm tracking-widest">
                  Explore
                </span>
              </a>
            </li>
            <li className="">
              <a
                onClick={() => setStory(true)}
                className="text-white flex justify-start relative  gap-2 cursor-pointer  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
              >
                <Modal isOpen={story}>
                  <div className="absolute w-[300px] h-fit bg-slate-500">
                    <form
                      onSubmit={handleStory}
                      className="p-2 bg-black bg-opacity-90"
                    >
                      <div className="w-full flex flex-col p-2">
                        <span className="text-yellow-50 text-xs">
                          Author Name
                        </span>
                        <input
                          name="authorName"
                          value={input.authorName}
                          onChange={hendleInputChange}
                          className="py-1 px-2 outline-none rounded-sm bg-slate-600 bg-opacity-35 text-white mt-1"
                          type="text"
                        />
                      </div>
                      <div className="w-full flex flex-col p-2">
                        <span className="text-yellow-50 text-xs">
                          Story Photo
                        </span>
                        <input
                          className="py-1 px-2 outline-none rounded-sm bg-slate-600 bg-opacity-35 text-white mt-1"
                          type="file"
                          name="storyPhoto"
                          onChange={(e) => setFile(e.target.files[0])}
                        />
                      </div>
                      <button className="py-2 px-4 mt-2 ml-2 mb-5 rounded-sm text-white text-sm box-decoration-slice bg-gradient-to-r from-amber-500 to-rose-600">
                        Create Story Photo
                      </button>
                    </form>
                  </div>
                </Modal>
                <PiVideoFill className="text-white text-2xl" />
                <span className="self-end mt-1 font-medium text-sm tracking-widest">
                  Story
                </span>
              </a>
            </li>
            <li className="">
              <a
                className="text-white flex justify-start  gap-2  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
                href="#"
              >
                <LuSend className="text-white text-2xl" />
                <span className="self-end mt-1 font-medium text-sm tracking-widest">
                  Messages
                </span>
              </a>
            </li>
            <li className="">
              <a
                className="text-white flex justify-start  gap-2  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
                href="#"
              >
                <LuHeart className="text-white text-3xl" />
                <span className="self-end mt-2 font-semibold text-sm tracking-widest">
                  Notifications
                </span>
              </a>
            </li>
            <li className="">
              <a
                onClick={() => setPostModal(true)}
                className="text-white flex justify-start  gap-2  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
              >
                <LuSquarePlus className="text-white text-2xl" />
                <span className="self-end mt-1 font-medium text-sm tracking-widest">
                  Create
                </span>
              </a>
            </li>
            <li className="">
              <a
                className="text-white flex justify-start  gap-2  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
                href="#"
              >
                <img
                  className="w-[25px] h-[25px] rounded-full"
                  src={user}
                  alt=""
                />
                <span className="self-end mt-1 font-medium text-sm tracking-widest">
                  Profile
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="satting h-[130px] ">
          <ul className="py-5 flex flex-col gap-1">
            <li className="">
              <a
                className="text-white flex justify-start  gap-2  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
                href="#"
              >
                <FaThreads className="text-white text-2xl" />
                <span className="self-end mt-1 font-medium text-sm tracking-widest">
                  Threads
                </span>
              </a>
            </li>
            <li className="">
              <a
                onClick={handleSattingModel}
                className="text-white flex justify-start cursor-pointer gap-2  py-3  px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
              >
                <FaBars className="text-white text-2xl" />
                <span className="self-end mt-1 font-medium text-sm tracking-widest">
                  More
                </span>
              </a>
            </li>
          </ul>
          <Modal isOpen={satting}>
            <div className="w-[260px] h-fit rounded-lg shadow-lg bg-neutral-900 z-50 absolute bottom-20">
              <ul className="py-5 flex flex-col gap-1  border-spacing-2 border-b-8  border-neutral-700">
                <li className="px-2">
                  <a
                    className="text-white flex justify-start  gap-2  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
                    href="#"
                  >
                    <CiSettings className="text-white text-xl" />
                    <span className="self-end text-xs tracking-widest">
                      Settings
                    </span>
                  </a>
                </li>
                <li className="px-2">
                  <a
                    className="text-white flex justify-start  gap-2  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
                    href="#"
                  >
                    <LuSquareActivity className="text-white text-xl" />
                    <span className="self-end text-xs tracking-widest">
                      Your activity
                    </span>
                  </a>
                </li>
                <li className="px-2">
                  <a
                    className="text-white flex justify-start  gap-2  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
                    href="#"
                  >
                    <BiBookmarkMinus className="text-white text-xl" />
                    <span className="self-end text-xs tracking-widest">
                      Saved
                    </span>
                  </a>
                </li>
                <li className="px-2">
                  <a
                    className="text-white flex justify-start  gap-2  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
                    href="#"
                  >
                    <GoMoon className="text-white text-xl" />
                    <span className="self-end text-xs tracking-widest">
                      Switch appearance
                    </span>
                  </a>
                </li>
                <li className="px-2">
                  <a
                    className="text-white flex justify-start  gap-2  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
                    href="#"
                  >
                    <TbMessageReport className="text-white text-xl" />
                    <span className="self-end text-xs tracking-widest">
                      Report accounts
                    </span>
                  </a>
                </li>
              </ul>

              <ul className="py-5 flex flex-col gap-1">
                <li className="px-2  border-b  border-neutral-700">
                  <a
                    className="text-white flex justify-start mb-1 gap-2  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
                    href="#"
                  >
                    <span className="self-end text-xs tracking-widest">
                      Switch accounts
                    </span>
                  </a>
                </li>
                <li className="px-2">
                  <a
                    className="text-white flex justify-start  gap-2  py-3 px-2 rounded-md hover:bg-slate-50 hover:bg-opacity-10"
                    href="#"
                  >
                    <span className="self-end text-xs tracking-widest">
                      Log out
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
