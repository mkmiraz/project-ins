import { TbAntennaBars1, TbSend } from "react-icons/tb";

import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { HiOutlineBookmark } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import formatPostTime from "../../utils.js/time";
import Modal from "../Modal/Modal";
import { RiDeleteBin6Fill, RiEditCircleFill } from "react-icons/ri";
import { useState } from "react";
import { deletePost } from "../../app/features/post/postApiSlice";

const Post = () => {
  // state
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  // selector
  const { posts } = useSelector((state) => state.posts);
  // satting modal show hide
  const handlegModel = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  // delete post
  // const handleDeletePost = (id) => {
  //   console.log(id);
  // };
  return (
    <>
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
                      className="w-[32px] h-[32px] object-cover  rounded-full border-2 border-black"
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
                  <Modal isOpen={modal}>
                    <div className="w-[250px] h-fit bg-zinc-800 rounded-md  z-50 absolute top-7 right-0 ">
                      <button
                        onClick={""}
                        className="flex items-center justify-center w-full gap-2 p-2 border-b border-gray-900 my-1 text-white hover:bg-slate-900 hover:bg-opacity-40"
                      >
                        <RiDeleteBin6Fill />
                        Delete
                      </button>
                      <button className="flex items-center justify-center w-full gap-2 p-2 border-b border-gray-900 my-1 text-white hover:bg-slate-900 hover:bg-opacity-40">
                        <RiEditCircleFill />
                        Edit
                      </button>
                    </div>
                  </Modal>

                  <TbAntennaBars1
                    onClick={handlegModel}
                    className="text-white text-3xl font-black mb-4 cursor-pointer"
                  />
                </div>
              </div>
              <div className="post-media w-full h-[585px]">
                <img
                  className="w-full h-full  rounded-md object-cover"
                  src={item.postPhoto}
                  alt=""
                />
              </div>
              <div className="post-bottom">
                <div className="like-area flex justify-between items-center py-3">
                  <div className="flex justify-start items-center gap-3">
                    <CiHeart className="text-white text-3xl font-black " />
                    {/* <FaHeart className="text-white text-3xl font-black text-red-600"/> */}
                    <FaRegComment className="text-white text-2xl" />
                    <TbSend className="text-white text-2xl" />
                  </div>
                  <div className="save">
                    <HiOutlineBookmark className="text-white text-2xl" />
                  </div>
                </div>
                <div className="flex justify-start gap-1">
                  <span className="text-white text-xs">5</span>
                  <span className="text-white text-xs">likes</span>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Post;
