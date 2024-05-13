/* eslint-disable react/prop-types */
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    Description,
    MinimumSalary,
    MaximumSalary,
    category,
    expiredDate,
    bannerUrl,
    Cname,
    location,
    a,
    d1,

    jobAdderName,
  } = job || {};
  const d = Description.slice(0, 70);
  const d2 = expiredDate.slice(0, 13);
  const d3 = d1.slice(0, 13);
  return (
    <Link
      to={`/job/${_id}`}
      className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all h-[515px]  "
    >
      {" "}
      <div className="">
        <img
          src={bannerUrl}
          alt=""
          className=" mb-3 w-[600px] h-[200px]  text-center mt-2"
        />
        <div className=" flex justify-between">
          <p className=" font-semibold flex justify-center items-center">
            <IoLocationSharp size={20} />
            {location}
          </p>
          <p className=" font-semibold">Company name : {Cname}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-1">
        <h1 className=" text-lg font-semibold text-gray-800 h-[30px] ml-1 ">
          {title}
        </h1>
        <span className="px-3 py-1 text-[12px] text-blue-600 uppercase bg-blue-200 rounded-full ">
          {category}
        </span>
      </div>
      <span className="   rounded-full ml-1 font-bold">
        {a} Applied for the Job
      </span>
      <div className="flex mt-1 flex-col ml-1 text-sm font-bold text-gray-600">
        <span className="    ">Posted By : {jobAdderName}</span>
        <p className=""> Posting Date: {d3}</p>
        <p className=" ">Deadline: {d2}</p>
      </div>
      <div>
        <p className=" text-sm font-bold text-gray-600 ml-1">
          Salary Range: $({MaximumSalary} - {MinimumSalary})
        </p>
        <p title={d} className="mt-2 text-sm text-gray-600 ">
          {d}...
        </p>
        <Link to={`/job/${_id}`}>
          <div className=" ">
            <button className="  bg-blue-500 px-3 py-2 w-full text-white my-4">
              View Details
            </button>
          </div>
        </Link>
      </div>
    </Link>
  );
};

export default JobCard;
