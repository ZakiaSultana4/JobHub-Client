import bannerImage from "../../assets/banner.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Banner = () => {
  return (
    <div className=" flex flex-col md:flex-row  items-center justify-between   bg-blue-500 text-white ">
      <div className="xl:w-11/12 py-6   md:w-[60vw] w-[90vw]  max-w-7xl mx-auto lg:p-0 md:px-5  md:ml-20">
        <h2 className="xl:text-7xl lg:text-5xl md:text-3xl text-4xl md:font-normal font-bold">
          Find a Job With Your Interests and Abilities
        </h2>
        <p className="md:pt-6 pt-3 pe-6 text-whiteSecondary md:text-base text-sm">
          Find a Job that match your interests with us. JobHub provides a
          place to find your dream jobs
        </p>
        <div className="flex pt-5">
          <button className="capitalize border-2 border-primaryColor bg-primaryColor  rounded-none py-3 md:px-8 px-4 flex items-center md:gap-5 gap-2 md:text-base text-sm">
            Get Start <MdOutlineArrowForwardIos />
          </button>
          <button className="capitalize border-2 border-primaryColor  rounded-none py-3 md:px-8 px-4 flex items-center gap-5 md:text-base text-sm">
            Contact
          </button>
        </div>
      </div>
      <div className=" md:h-[100vh] md:w-[60vw] w-[90vw]">
        <img src={bannerImage} alt="" className=" my-5 md:pr-20" />
      </div>
    </div>
  );
};

export default Banner;
