import { useContext, useRef, useState } from "react";
import { imageUpload } from "../hooks/Cloudinary";
import { Image } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { axiosSecure } from "../hooks/useExiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Card } from "@nextui-org/react";
import moment from "moment/moment";

const UpdateJob = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  


  const handleAdd = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const location = form.location.value;
    const MaximumSalary = form.MaximumSalary.value;
    const MinimumSalary = form.MinimumSalary.value;

    const Description = form.Description.value;
    const category = form.category.value;
    const Cname = form.Cname.value;
    const date = form.expiredDate.value;
    const expiredDate = moment(date).format("lll");
    const jobAdderName = user.displayName;
    const jobAdderEmail = user.email;
    const jobAdderPhoto = user?.photoURL;

    const Info = {
      title,
      MaximumSalary,
      MinimumSalary,
      Description,
      Cname,
      category,
      location,
      expiredDate,
      jobAdderName,
      jobAdderEmail,
      jobAdderPhoto,

    };

    axiosSecure
      .put(`/job/${data._id}`, { ...Info })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          console.log(res.data);
          toast.success("Job added successfully!!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div
      className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3
        border border-dashed mt-5 min-h-screen rounded-lg"
    >
      <form action="" onSubmit={handleAdd}>
        <div className="mx-5 mt-2">
          <label htmlFor="title">
            <input
              type="text"
              name="title"
              className="w-full md:py-5
             py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg "
              defaultValue={data.title}
          
            />
          </label>
        </div>
        <div className=" flex mx-5 flex-col md:flex-row mt-5">
          <div className="  bg-white w-full  m-auto rounded-lg flex-1 py-5 ">
            <div className="  bg-white w-full  m-auto rounded-lg flex-1 py-5 ">
              <label htmlFor="Image1">
                {" "}
                Job Cover Image
                <input
                  type="text"
                  name="Image1"
                  className="w-full md:py-5 py-2 md:text-base border text-sm mt-3 rounded-lg px-5"
                 defaultValue={data.BannerImage}
              
                />
              </label>
            </div>
          </div>
          <div className=" flex-1">
            <div className="mx-5 mt-2">
              <label htmlFor="location">
                <input
                  type="text"
                  name="location"
                  defaultValue={data.location}
                  className="w-full md:py-5
             py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg "
                  placeholder="Job Location *"
              
                />
              </label>
            </div>
            <div className="mx-5 mt-2">
              <label htmlFor="category">
                <select
                  name="category"
                  defaultValue={data.category}
                  className="w-full md:py-5
                  py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg "
              
                >
                  <option selected disabled>
                    Select Job Category
                  </option>
                  <option value="OnSite">On Site Job</option>
                  <option value="Remote">Remote Job</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Part">Part Time</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className=" flex mx-5 flex-col md:flex-row mt-5">
          <div className=" flex-1">
            <div className="mx-5 mt-2">
              <label htmlFor="Cname">
                <input
                  type="text"
                  name="Cname"
                  defaultValue={data.Cname}
                  className="w-full md:py-5
             py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg "
                  placeholder="Company name *"
              
                />
              </label>
            </div>
            <div className="mx-5 mt-2">
            <div className="mx-5 mt-2">
              <label htmlFor="expiredDate">
                {" "}
                Expired Date/Time
                <input
                  type="datetime-local"
                  name="expiredDate"
                  className="w-full md:py-5 py-2 md:text-base border text-sm mt-3 rounded-lg px-5"
                  defaultValue={data.expiredDate}
              
                />
              </label>
            </div>
            </div>
          </div>
          <div className="  bg-white w-full  m-auto rounded-lg flex-1 ">
            <div className="w-full  mb-4 md:mb-0 h-full flex   justify-center items-center">
              <div className="  bg-white w-full  m-auto rounded-lg flex-1 ">
                <div className="w-full  mb-4 md:mb-0 h-full flex   justify-center items-center">
                  <label htmlFor="Image2">
                    {" "}
                    Add Your Company Logo
                    <input
                      type="text"
                      name="Image2"
                      className="w-full md:py-5 py-2 md:text-base border text-sm mt-3 rounded-lg px-5"
                      defaultValue={data.CompanyImage}
                  
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex">
          <div className="mx-5 mt-2 flex-1">
            <label htmlFor="MinimumSalary">
              <input
                type="number"
                name="MinimumSalary"
                defaultValue={data.MinimumSalary}
                className="w-full md:py-5
             py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg "
                placeholder="Minimum Salary *"
            
              />
            </label>
          </div>
          <div className="mx-5 mt-2 flex-1">
            <label htmlFor="MaximumSalary">
              <input
                type="number"
                name="MaximumSalary"
                defaultValue={data.MaximumSalary}
                className="w-full md:py-5
             py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg "
                placeholder="Maximum Salary *"
            
              />
            </label>
          </div>
        </div>
        <div className="mx-5 mt-2 ">
          <label htmlFor="Description">
            <input
              type="text"
              name="Description"
              defaultValue={data.Description}
              className="w-full md:py-12
             py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg "
              placeholder="Description"
          
            />
          </label>
        </div>
        <div className=" text-center my-3 bg-slate-500 mx-5 py-4 rounded-lg text-white">
          <button type="submit">Update Job</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateJob;
