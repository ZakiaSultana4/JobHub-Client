/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { pdfUpload } from "../hooks/Cloudinary";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { axiosSecure } from "../hooks/useExiosSecure";
import moment from "moment";

export default function ApplyForm({
  isDisabled,
  title,
  jobAdderEmail,
  jobAdderName,
  Cname,
  MaximumSalary,
  MinimumSalary,
  category,
  expiredDate,
  jobAdderPhoto,
  a,
  jobId,
  ...props
}) {
  const [resume, setResume] = useState("");
  const resumeRef = useRef(null);
  const { user } = useContext(AuthContext);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const imageUrl = await pdfUpload(file);
        console.log(imageUrl);
        const { secure_url } = imageUrl;
        console.log(secure_url);

        setResume(secure_url);
      } catch (e) {
        console.log(e);

        toast.error(
          "Something went wrong while uploading CV. PLease try again."
        );
      }
    }
  };
  const handleButtonClick = () => {
    if (resumeRef.current) {
      resumeRef.current.click();
    }

  };
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    if (user?.email === jobAdderEmail)
      return toast.error("Action not permitted!");

    const email = user?.email;

    const Data = {
      title,
      email,
      MaximumSalary,
      MinimumSalary,
      category,
      expiredDate,
      Cname,
      jobAdderEmail,
      jobAdderName,
      jobAdderPhoto,
      resume,
      a,
      jobId
    };
    try {
      const { data } = await axiosSecure.post(`/bid`, Data);
      console.log(data);
      toast.success("Job Placed Successfully!");
    } catch (err) {
      toast.success(err.response.data);
      e.target.reset();
    }
  };
  return (
    <>
      <div className="">
        <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3">
          <div className="pt-16 grid md:grid-cols-4 grid-cols-1">
            <div className="md:col-span-3">
              <h1 className="md:text-5xl text-3xl font-bold"></h1>

              <div className="mt-7">
                <div>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                    {...props}
                    className={` text-white px-5 py-2 w-full ${
                      isDisabled ? "bg-red-500 disabled" : "bg-[#2d74c8]"
                    }`}
                  >
                    {isDisabled ? "Expired" : "Apply"}
                  </button>

                  <dialog
                    id={`my_modal_5`}
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <div>
                        <form
                          onSubmit={handleFormSubmission}
                          className="grid grid-cols-1 gap-5"
                        >
                          <label className="font-bold md:text-xl text-lg pt-1">
                            Job Title :
                            <input
                              type="text"
                              className="w-full mt-2 py-2 px-3 bg-gray-100 rounded-lg"
                              value={title}
                              readOnly
                              id=""
                            />
                          </label>
                          <label
                            onClick={handleButtonClick}
                            className="font-medium md:text-sm text-xs pt-1 flex flex-col"
                          >
                            <p className=" font-semibold text-gray-600">
                              {" "}
                              Upload Your Resume :
                            </p>
                            <input
                              type="file"
                              label="Upload Your Resume"
                              placeholder="file"
                              className="py-2"
                              ref={resumeRef}
                              onChange={handleFileChange}
                              accept=".pdf, .doc, .docx"
                            />
                          </label>
                          <label className="font-medium md:text-sm text-xs pt-1">
                            Job Adder Name :
                            <input
                              type="text"
                              className="w-full mt-2 py-2 px-3 bg-gray-100 rounded-lg"
                              value={jobAdderName}
                              readOnly
                              id=""
                            />
                          </label>
                          <label className="font-medium md:text-sm text-xs pt-1">
                            Job Adder Email :
                            <input
                              type="text"
                              className="w-full mt-2 py-2 px-3 bg-gray-100 rounded-lg"
                              value={jobAdderEmail}
                              readOnly
                              id=""
                            />
                          </label>

                          <label className="font-medium md:text-sm text-xs pt-1">
                            User Email :
                            <input
                              type="text"
                              className="w-full mt-2 py-2 px-3 bg-gray-100 rounded-lg"
                              value={user?.email}
                              readOnly
                              id=""
                            />
                          </label>

                          <label className="font-medium md:text-sm text-xs pt-1">
                            Request Date :
                            <input
                              type="text"
                              className="w-full mt-2 py-2 px-3 bg-gray-100 rounded-lg"
                              name="requestDate"
                              value={moment(new Date()).format("lll")}
                              readOnly
                              id=""
                            />
                          </label>

                          <label className="font-medium md:text-sm text-xs pt-1">
                            Expired Date :
                            <input
                              type="text"
                              className="w-full mt-2 py-2 px-3 bg-gray-100 rounded-lg"
                              value={expiredDate}
                              readOnly
                            />
                          </label>

                          <div>
                            {isDisabled ? (
                              <p className=" text text-red-500 font-semibold text-2xl text-center">
                                This Job is Expired
                              </p>
                            ) : (
                              <button
                                type="submit"
                                className="btn bg-blue-500 text-white w-full"
                              >
                                Apply Now
                              </button>
                            )}
                          </div>
                        </form>
                      </div>
                      <div className="modal-action">
                        <form
                          method="dialog"
                          className=" flex justify-center items-center"
                        >
                          {/* if there is a button in form, it will close the modal */}
                          <button
                            id="close-btn"
                            className="btn bg-red-500 text-white  px-40 md:px-48 text-center mx-auto md:mr-3"
                          >
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
