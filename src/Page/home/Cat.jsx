const Cat = () => {
  return (
    <div className=" container px-6 py-10 mx-auto">
      <div className="container flex justify-center mx-auto pt-16 px-5">
        <div>
          <p className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
            Browse job by our recent category
          </p>
          <h1 className="max-w-2xl mx-auto my-6 text-center text-gray-500">
            Find the type of work you need, clearly defined and ready to start.
            Work begins as soon as you purchase and provide requirements.
          </h1>
        </div>
      </div>

      <div className=" grid md:grid-cols-3 grid-cols-1 gap-3  mt-5 px-5">
        <div
          className=" bg-white py-9 px-8 md:w-[430px] text-center shadow-md 
        flex flex-col items-center justify-center border border-blue-400/30"
        >
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/icons/marketing.svg"
            alt=""
          />
          <p className=" text-2xl my-2">Marketing & Communication</p>
          <p className=" text-gray-600 font-semibold ">10 Available Vacancy</p>
        </div>
        <div
          className=" bg-white py-9 px-8 md:w-[430px] text-center shadow-md 
        flex flex-col items-center justify-center border border-blue-400/30"
        >
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/icons/content-writer.svg"
            alt=""
          />
          <p className=" text-2xl my-2">Web Development</p>
          <p className=" text-gray-600 font-semibold ">5 Available Vacancy</p>
        </div>
        <div
          className=" bg-white py-9 px-8 md:w-[430px] text-center shadow-md 
        flex flex-col items-center justify-center border border-blue-400/30"
        >
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/icons/marketing-director.svg"
            alt=""
          />
          <p className=" text-2xl my-2">Marketing Director</p>
          <p className=" text-gray-600 font-semibold ">15 Available Vacancy</p>
        </div>
        <div
          className=" bg-white py-9 px-8 md:w-[430px] text-center shadow-md 
        flex flex-col items-center justify-center border border-blue-400/30"
        >
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/icons/marketing.svg"
            alt=""
          />
          <p className=" text-2xl my-2">Python Developer With django</p>
          <p className=" text-gray-600 font-semibold ">30 Available Vacancy</p>
        </div>
        <div
          className=" bg-white py-9 px-8 md:w-[430px] text-center shadow-md 
        flex flex-col items-center justify-center border border-blue-400/30"
        >
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/icons/system-analyst.svg"
            alt=""
          />
          <p className=" text-2xl my-2">System Analyst</p>
          <p className=" text-gray-600 font-semibold ">12 Available Vacancy</p>
        </div>
        <div
          className=" bg-white py-9 px-8 md:w-[430px] text-center shadow-md 
        flex flex-col items-center justify-center border border-blue-400/30"
        >
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/icons/proof-reading.svg"
            alt=""
          />
          <p className=" text-2xl my-2">Market Research</p>
          <p className=" text-gray-600 font-semibold ">8 Available Vacancy</p>
        </div>
      </div>
    </div>
  );
};

export default Cat;
