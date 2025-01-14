import user from "../../assets/user.png";
import tt from "../../assets/ttt.jpg";

const RightSideBar = () => {
  return (
    <>
      <div className="user-area flex flex-col items-start">
        <div className="user-link pt-2 w-[285px] flex justify-between items-cente ">
          <div className="flex items-center gap-2">
            <img
              className="w-[45px] object-cover h-[45px] rounded-full"
              src={user}
              alt=""
            />
            <div className="info">
              <h4 className="text-slate-100 text-xs">Miraz Khondokar</h4>
            </div>
          </div>
          <span className="text-blue-600 hover:text-white cursor-pointer self-center text-xs h-fit">
            Switch
          </span>
        </div>
        <div className="title w-[285px] flex justify-between items-center  pt-5 pb-4">
          <h3 className="text-slate-300 text-xs">Suggested for you</h3>
          <span className="text-slate-50 text-xs cursor-pointer"> See All</span>
        </div>

        <div className="my-2 w-[285px] flex justify-between items-cente">
          <div className="flex items-center gap-2">
            <img
              className="w-[45px] h-[45px] object-cover rounded-full"
              src={tt}
              alt=""
            />
            <div className="info">
              <h4 className="text-slate-100 text-xs">Abid </h4>
            </div>
          </div>
          <span className="text-blue-600 h-fit self-center hover:text-white cursor-pointer text-xs">
            Follow
          </span>
        </div>
        <div className="footer py-5">
          <div className="link py-5 w-[285px] gap-1 flex flex-wrap">
            <a className="text-xs text-gray-500" href="#">
              About.
            </a>
            <a className="text-xs text-gray-500" href="#">
              Help.
            </a>
            <a className="text-xs text-gray-500" href="#">
              API.
            </a>
            <a className="text-xs text-gray-500" href="#">
              Jobs.
            </a>
            <a className="text-xs text-gray-500" href="#">
              Privacy.
            </a>
            <a className="text-xs text-gray-500" href="#">
              Terms.
            </a>
            <a className="text-xs text-gray-500" href="#">
              Locations.
            </a>
            <a className="text-xs text-gray-500" href="#">
              Language.
            </a>
            <a className="text-xs text-gray-500" href="#">
              Meta Verified.
            </a>
          </div>
          <span className="text-xs text-gray-500">
            © 2025 INSTAGRAM FROM META
          </span>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
