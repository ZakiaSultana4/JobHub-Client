const About = () => {
  return (
    <div className="">
      <div className=" flex flex-col md:flex-row  items-center justify-between     ">
        <div className="xl:w-11/12 py-6   md:w-[60vw] w-[90vw]  max-w-7xl mx-auto lg:p-0 md:px-5  md:ml-20">
          <h2 className="xl:text-7xl lg:text-5xl md:text-3xl text-4xl md:font-normal font-bold">
            The Top rated Job Board for our expert Candidates
          </h2>
          <p className="md:pt-6 pt-3 pe-6 text-whiteSecondary md:text-base text-sm">
            Search and connect with the right candidates faster. This talent
            seach gives you the opportunity to find candidates who may be a
            perfect fit for your role
          </p>
          <div className="flex pt-6">
            <button className="capitalize border-2 border-primaryColor bg-primaryColor bg-blue-500 text-white rounded-none py-3 md:px-8 px-4 flex items-center md:gap-5 gap-2 md:text-base text-sm">
             Submit your resume now
            </button>
            
          </div>
        </div>
        <div className=" md:h-[100vh] md:w-[60vw] w-[90vw] mt-5">
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/blog/img-job.png"
            alt=""
            className=" my-5 md:pr-20"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
