import { TbAntennaBars1, TbSend } from "react-icons/tb";

import { CiHeart } from "react-icons/ci";
import { FaHeart, FaRegComment, FaTimes } from "react-icons/fa";
import { HiOutlineBookmark } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import formatPostTime from "../../utils.js/time";
import Modal from "../Modal/Modal";
import { RiDeleteBin6Fill, RiEditCircleFill } from "react-icons/ri";
import { useState } from "react";
import {
  deletePost,
  likeePost,
  updatePost,
} from "../../app/features/post/postApiSlice";
import Swal from "sweetalert2";
import { deveImageUpload } from "../../helpers/cloudinary";

const Post = () => {
  const dispatch = useDispatch();
  // selector
  const { posts } = useSelector((state) => state.posts);
  // state
  const [modal, setModal] = useState({});
  // const [like, setLike] = useState(1);
  const [file, setFile] = useState(null);
  const [edit, setEdit] = useState(false);
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

  const handlegModel = (id) => {
    if (modal[id]) {
      setModal((prev) => ({ ...prev, [id]: false }));
    } else {
      setModal((prev) => ({ ...prev, [id]: true }));
    }
  };
  // delete post
  const handleDeletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePost(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 500,
        });
        setModal(false);
      }
    });
  };

  // edite modal show
  const handleEditModal = (id) => {
    setInput(posts.find((data) => data.id == id));

    setEdit(true);
    setModal(false);
  };

  // post update
  const handlePostUpdat = async (e) => {
    e.preventDefault();

    let photoUrl = input.postPhoto;

    if (file) {
      const postFile = await deveImageUpload({
        file: file,
        preset: "shop-app",
        api_key: "dl960tfs5",
      });
      photoUrl = postFile.secure_url;
    }

    dispatch(updatePost({ ...input, postPhoto: photoUrl }));
    Swal.fire({
      icon: "success",
      title: "Post Updat successfull",
      showConfirmButton: false,
      timer: 500,
      position: "top-center",
    });

    setEdit(false);
  };

  // likes post

  const handlePostLike = (id) => {
    const updatedPost = posts.find((item) => item.id === id);
    if (updatedPost) {
      const updatedData = { ...updatedPost, likes: updatedPost.likes + 1 };
      dispatch(likeePost(updatedData));
    }
  };

  return (
    <>
      <Modal isOpen={edit}>
        <div className="w-[400px] h-[400px]  z-50 rounded-lg shadow-lg bg-black bg-opacity-40 absolute bottom-0 right-0 top-0 left-0 m-auto">
          <div className="title flex justify-between p-5">
            <h2 className="text-white">Post Updat</h2>
            <FaTimes
              onClick={() => setEdit(false)}
              className="text-white cursor-pointer"
            />
          </div>
          <form
            onSubmit={handlePostUpdat}
            className="p-2 bg-black bg-opacity-90"
          >
            <div className="flex items-center gap-2">
              <img
                className="w-[45px] object-cover h-[45px] rounded-full"
                src={input.authorPhoto}
                alt=""
              />
              <div className="info">
                <h4 className="text-slate-100 text-xs">{input.authorName}</h4>
              </div>
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
              <img
                className="w-full object-contain"
                src={input.postPhoto}
                alt=""
              />
              <input
                className="py-1 px-2 outline-none rounded-sm bg-slate-600 bg-opacity-35 text-white mt-1"
                type="file"
                name="postPhoto"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button className="py-2 px-4 mt-2 ml-2 mb-5 rounded-sm text-white text-sm box-decoration-slice bg-gradient-to-r from-amber-500 to-rose-600">
              Create Post
            </button>
          </form>
        </div>
      </Modal>
      {posts
        ?.slice()
        .reverse()
        .map((item) => {
          return (
            <div
              key={item.id}
              className="w-[470px] pb-4 border-b border-neutral-600 h-fit"
            >
              <div className="post-top pt-2   flex justify-between">
                <div className="author flex items-center justify-center gap-2">
                  <div className="w-[36px] h-[36px]  rounded-full flex justify-center items-center box-decoration-slice bg-gradient-to-r from-amber-500 to-rose-600">
                    <img
                      className="w-[32px] h-[32px] object-cover  rounded-full border-2 border-black "
                      src={item.authorPhoto}
                      alt=""
                    />
                  </div>
                  <h4 className="text-white text-xs">{item.authorName}</h4>
                  <span className="time text-xs text-neutral-400">
                    {formatPostTime(item.createAt)}
                  </span>
                </div>
                <div className="bars h-fit relative">
                  <Modal isOpen={modal[item.id] || false}>
                    <div className="w-[250px] h-fit bg-zinc-800 rounded-md  z-50 absolute top-7 right-0 ">
                      <button
                        onClick={() => handleDeletePost(item.id)}
                        className="flex items-center justify-center w-full gap-2 p-2 border-b border-gray-900 my-1 text-white hover:bg-slate-900 hover:bg-opacity-40"
                      >
                        <RiDeleteBin6Fill />
                        Delete
                      </button>
                      <button
                        onClick={() => handleEditModal(item.id)}
                        className="flex items-center justify-center w-full gap-2 p-2 border-b border-gray-900 my-1 text-white hover:bg-slate-900 hover:bg-opacity-40"
                      >
                        <RiEditCircleFill />
                        Edit
                      </button>
                    </div>
                  </Modal>
                  <TbAntennaBars1
                    onClick={() => handlegModel(item.id)}
                    className="text-white text-3xl font-black mb-4 cursor-pointer"
                  />
                </div>
              </div>
              <div className="post-media w-full h-[585px]">
                <img
                  onClick={() => handlePostLike(item.id)}
                  className="w-full h-full  rounded-md object-cover cursor-pointer"
                  src={item.postPhoto}
                  alt=""
                />
              </div>
              <div className="post-bottom">
                <div className="like-area flex justify-between items-center py-3">
                  <div className="flex justify-start items-center gap-3">
                    {item.likes === 0 ? (
                      <CiHeart
                        onClick={() => handlePostLike(item.id)}
                        className="text-white text-3xl  font-black cursor-pointer"
                      />
                    ) : (
                      <FaHeart
                        onClick={() => handlePostLike(item.id)}
                        className="text-3xl font-black text-red-600 cursor-pointer"
                      />
                    )}
                    <FaRegComment className="text-white text-2xl" />
                    <TbSend className="text-white text-2xl" />
                  </div>
                  <div className="save">
                    <HiOutlineBookmark className="text-white text-2xl" />
                  </div>
                </div>
                <div className="flex justify-start gap-1">
                  <span className="text-white text-xs">
                    {Number(item.likes) || 0}
                  </span>
                  <span className="text-white text-xs">like</span>
                </div>
                <div className="post-text">
                  <p className="text-yellow-100 text-xs">{item.postContent}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Post;
