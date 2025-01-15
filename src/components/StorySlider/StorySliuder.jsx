import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";

const StorySliuder = () => {
  const { story } = useSelector((state) => state.story);

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
          {story
            ?.slice()
            .reverse()
            .map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="story  flex justify-center flex-col items-center w-[90px] ">
                    <div className="story_img w-[66px]  h-[66px]  rounded-full flex justify-center items-center box-decoration-slice bg-gradient-to-r from-amber-500 to-rose-600">
                      <img
                        className="w-[62px] h-[62px] object-cover  rounded-full border-2 border-black"
                        src={item.storyPhoto}
                        alt=""
                      />
                    </div>
                    <span className="text-white text-xs ml-2 mt-1 whitespace-nowrap text-ellipsis w-20">
                      {item.authorName}
                    </span>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export default StorySliuder;
