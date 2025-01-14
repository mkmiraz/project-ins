import photo from "../../assets/user.png";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const StorySliuder = () => {
  return (
    <>
      <div className="story_area w-[630px] h-fit py-7  ml-48">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={8}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="story flex justify-center flex-col items-center w-[90px] ">
              <div className="story_img w-[66px] h-[66px]  rounded-full flex justify-center items-center box-decoration-slice bg-gradient-to-r from-amber-500 to-rose-600">
                <img
                  className="w-[62px] h-[62px]  rounded-full border-2 border-black"
                  src={photo}
                  alt=""
                />
              </div>
              <span className="text-white text-xs mt-1 whitespace-nowrap text-ellipsis w-20">
                Miraz Khondokar
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="story flex justify-center flex-col items-center w-[90px] ">
              <div className="story_img w-[66px] h-[66px]  rounded-full flex justify-center items-center box-decoration-slice bg-gradient-to-r from-amber-500 to-rose-600">
                <img
                  className="w-[62px] h-[62px]  rounded-full border-2 border-black"
                  src={photo}
                  alt=""
                />
              </div>
              <span className="text-white text-xs mt-1 whitespace-nowrap text-ellipsis w-20">
                Miraz Khondokar
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="story flex justify-center flex-col items-center w-[90px] ">
              <div className="story_img w-[66px] h-[66px]  rounded-full flex justify-center items-center box-decoration-slice bg-gradient-to-r from-amber-500 to-rose-600">
                <img
                  className="w-[62px] h-[62px]  rounded-full border-2 border-black"
                  src={photo}
                  alt=""
                />
              </div>
              <span className="text-white text-xs mt-1 whitespace-nowrap text-ellipsis w-20">
                Miraz Khondokar
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="story flex justify-center flex-col items-center w-[90px] ">
              <div className="story_img w-[66px] h-[66px]  rounded-full flex justify-center items-center box-decoration-slice bg-gradient-to-r from-amber-500 to-rose-600">
                <img
                  className="w-[62px] h-[62px]  rounded-full border-2 border-black"
                  src={photo}
                  alt=""
                />
              </div>
              <span className="text-white text-xs mt-1 whitespace-nowrap text-ellipsis w-20">
                Miraz Khondokar
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="story flex justify-center flex-col items-center w-[90px] ">
              <div className="story_img w-[66px] h-[66px]  rounded-full flex justify-center items-center box-decoration-slice bg-gradient-to-r from-amber-500 to-rose-600">
                <img
                  className="w-[62px] h-[62px]  rounded-full border-2 border-black"
                  src={photo}
                  alt=""
                />
              </div>
              <span className="text-white text-xs mt-1 whitespace-nowrap text-ellipsis w-20">
                Miraz Khondokar
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="story flex justify-center flex-col items-center w-[90px] ">
              <div className="story_img w-[66px] h-[66px]  rounded-full flex justify-center items-center box-decoration-slice bg-gradient-to-r from-amber-500 to-rose-600">
                <img
                  className="w-[62px] h-[62px]  rounded-full border-2 border-black"
                  src={photo}
                  alt=""
                />
              </div>
              <span className="text-white text-xs mt-1 whitespace-nowrap text-ellipsis w-20">
                Miraz Khondokar
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="story flex justify-center flex-col items-center w-[90px] ">
              <div className="story_img w-[66px] h-[66px]  rounded-full flex justify-center items-center box-decoration-slice bg-gradient-to-r from-amber-500 to-rose-600">
                <img
                  className="w-[62px] h-[62px]  rounded-full border-2 border-black"
                  src={photo}
                  alt=""
                />
              </div>
              <span className="text-white text-xs mt-1 whitespace-nowrap text-ellipsis w-20">
                Miraz Khondokar
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="story flex justify-center flex-col items-center w-[90px] ">
              <div className="story_img w-[66px] h-[66px]  rounded-full flex justify-center items-center box-decoration-slice bg-gradient-to-r from-amber-500 to-rose-600">
                <img
                  className="w-[62px] h-[62px]  rounded-full border-2 border-black"
                  src={photo}
                  alt=""
                />
              </div>
              <span className="text-white text-xs mt-1 whitespace-nowrap text-ellipsis w-20">
                Miraz Khondokar
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="story flex justify-center flex-col items-center w-[90px] ">
              <div className="story_img w-[66px] h-[66px]  rounded-full flex justify-center items-center box-decoration-slice bg-gradient-to-r from-amber-500 to-rose-600">
                <img
                  className="w-[62px] h-[62px]  rounded-full border-2 border-black"
                  src={photo}
                  alt=""
                />
              </div>
              <span className="text-white text-xs mt-1 whitespace-nowrap text-ellipsis w-20">
                Miraz Khondokar
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default StorySliuder;
