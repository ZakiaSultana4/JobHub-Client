import "./style.css";
import bannerVideo from "../../assets/images/hotel.mp4";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const Banner = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-102px)] overflow-y-hidden relative flex justify-center items-center">
        <video
          src={bannerVideo}
          width="100%"
          className="absolute z-0"
          height="100%"
          autoPlay
          loop
          muted
        ></video>
        <span className="overlay text-white"></span>

        <div className="z-40 absolute w-full overflow-x-hidden">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="mb-10">
                <ScrollAnimation>
                  <h1 className="title-text text-white md:text-7xl font-bold text-5xl">
                    <span className="text-[#209CEE] title-text">
                      Nourishing connections
                    </span>{" "}
                    <br />
                    One plate at a time.
                  </h1>
                  <p className="text-white md:my-8 my-5 md:text-base text-sm">
                    Food is the universal language that brings us together.{" "}
                    <br /> Share a meal, share a moment, and share the love
                  </p>
                  <div>
                    <button className="btn bg-[#209CEE] text-white border-none">
                      View All Foods
                    </button>
                  </div>
                </ScrollAnimation>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-10">
                <ScrollAnimation>
                  <h1 className="title-text text-white md:text-7xl font-bold text-5xl">
                    <span className="text-[#209CEE] title-text">
                      Sharing not only food{" "}
                    </span>{" "}
                    <br />
                    but the joy of giving.
                  </h1>
                  <p className="text-white md:my-8 my-5 md:text-base text-sm">
                    Food is the universal language that brings us together.{" "}
                    <br /> Share a meal, share a moment, and share the love
                  </p>
                  <div>
                    <button className="btn bg-[#209CEE] text-white border-none">
                      View All Foods
                    </button>
                  </div>
                </ScrollAnimation>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-10">
                <ScrollAnimation>
                  <h1 className="title-text text-white md:text-7xl font-bold text-5xl">
                    <span className="text-[#209CEE] title-text">
                      Passionately prepared,{" "}
                    </span>{" "}
                    <br />
                    generously shared.
                  </h1>
                  <p className="text-white md:my-8 my-5 md:text-base text-sm">
                    Food is the universal language that brings us together.{" "}
                    <br /> Share a meal, share a moment, and share the love
                  </p>
                  <div>
                    <button className="btn bg-[#209CEE] text-white border-none">
                      View All Foods
                    </button>
                  </div>
                </ScrollAnimation>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-10">
                <ScrollAnimation>
                  <h1 className="title-text text-white md:text-7xl font-bold text-5xl">
                    <span className="text-[#209CEE] title-text">
                      Savor the moments,
                    </span>{" "}
                    <br />
                    share the flavors.
                  </h1>
                  <p className="text-white md:my-8 my-5 md:text-base text-sm">
                    Food is the universal language that brings us together.{" "}
                    <br /> Share a meal, share a moment, and share the love
                  </p>
                  <div>
                    <button className="btn bg-[#209CEE] text-white border-none">
                      View All Foods
                    </button>
                  </div>
                </ScrollAnimation>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Banner;
