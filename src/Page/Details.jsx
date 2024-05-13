import { useLoaderData } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { formatDistanceToNow } from "date-fns";
import ApplyForm from "../Component/ApplyForm";
const Details = () => {
  const job = useLoaderData();
  const {

    title,
    Description,
    jobAdderName,
    jobAdderEmail,
    MinimumSalary,
    MaximumSalary,
    category,
    expiredDate,
    bannerUrl,
    Cname,
    location,
    jobAdderPhoto,
    d1,
    a
  } = job || {};
  const jobId = job._id
  function createdDate(date) {
    const relativeTime = formatDistanceToNow(new Date(date), {
      addSuffix: true,
    });

    return relativeTime.replace("about ", "");
  }
  return (
    <div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
      {/* Job Details */}
      <img
        src={bannerUrl}
        alt=""
        className=" mb-2 w-full h-[480px]  text-center flex-1"
      />
      <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
        <div className="flex items-center justify-between">
          <h1 className=" text-3xl font-semibold text-gray-800 ">{title}</h1>
          <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
            {category}
          </span>
        </div>

        <div>
          <p className=" text-lg font-bold text-gray-600 ">
            Salary Range: ${MaximumSalary}- ${MinimumSalary}
          </p>

          <div className="flex items-center gap-5">
            <div>
              <p className="mt-2 text-sm  text-gray-600 ">
                Company Name: {Cname}
              </p>
              <p className="mt-2 text-sm  text-gray-600 ">
                Location : {location}
              </p>
            </div>
          </div>
          <p className="mt-2 text-sm  text-gray-600 ">
            Created The Job At : {createdDate(d1)}
          </p>
          <p className="mt-2 text-sm  text-gray-600 ">
            Expired The Job At : {expiredDate}
          </p>
          <p className="mt-2 text-lg text-gray-600 ">{Description}</p>
        </div>
        <div className="">
          <ApplyForm
            title={title}
            companyName={Cname}
            jobId={jobId}
            jobAdderEmail={jobAdderEmail}
            expiredDate={expiredDate}
            Description={Description}
            jobAdderName={jobAdderName}
            MaximumSalary={MaximumSalary}
            MinimumSalary={MinimumSalary}
            jobAdderPhoto={jobAdderPhoto}
            a={a}
            category={category}
            isDisabled={new Date(expiredDate) > new Date() ? false : true}
            size={"md"}
            radius={"sm"}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
