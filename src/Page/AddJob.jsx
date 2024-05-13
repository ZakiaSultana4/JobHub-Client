import { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { axiosSecure } from "../hooks/useExiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import moment from "moment/moment";
import { imageUpload } from "../hooks/Cloudinary";
import { Card } from "@nextui-org/card";


const AddJob = () => {
  const { user } = useContext(AuthContext);
  const d = new Date();
  d.getDate();
  const bannerRef = useRef(null);
  const companyLogoRef = useRef(null);
  const [bannerUrl, setbannerUrl] = useState();
  const [logoUrl, setlogoUrl] = useState();

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
    const d1 = moment(d).format("lll");
    const jobAdderName = user.displayName;
    const jobAdderEmail = user.email;
    const jobAdderPhoto = user?.photoURL;
  const a=0
    const Info = {
      title,
      MaximumSalary,
      MinimumSalary,
      Description,
      Cname,
      category,
      location,
      bannerUrl,
      logoUrl,
      jobAdderName,
      jobAdderEmail,
      jobAdderPhoto,
      expiredDate,
      d1,
      a
    };

    axiosSecure
      .post("/add-job", { ...Info })
      .then((res) => {
        if (res.data.insertedId) {
          console.log(res.data);
          toast.success("Job added successfully!!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      try {
        const imageUrl = await imageUpload(selectedFile);
        const { secure_url } = imageUrl;
        console.log(secure_url);
        setbannerUrl(secure_url);
      } catch (e) {
        console.log(e);
      }
    }
  };
  const handleCompanyFileChange = async (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      try {
        const imageUrl = await imageUpload(selectedFile);

        const { secure_url } = imageUrl;
        
        setlogoUrl(secure_url);
        console.log(secure_url);
      } catch (e) {
        console.log(e);
      }
    }
  };
  const handleButtonClick = () => {
    if (bannerRef.current) {
      bannerRef.current.click();
    }
    console.log("ghfghgf");
  };
  const handleCompanyButtonClick = () => {
    if (companyLogoRef.current) {
      companyLogoRef.current.click();
    }
  };
  return (
    <div
      className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3
        border border-dashed my-10 rounded-lg"
    >
      <form action="" onSubmit={handleAdd} className=" ">
        <div className="mx-5 mt-2">
          <span className="">Job Title :</span>
          <label htmlFor="title">
            <input
              type="text"
              name="title"
              className="w-full md:py-5
             py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg "
              placeholder="Job Title *"
              required
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="mx-5 mt-2">
          <span className="">Job Location :</span>
            <label htmlFor="location">
              <input
                type="text"
                name="location"
                className="w-full md:py-5
             py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg "
                placeholder="Job Location *"
                required
              />
            </label>

            <div className=" mt-2">
              <label htmlFor="category">
                <select
                  name="category"
                  className="w-full md:py-5
                  py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg "
                  required
                >
                  <option selected disabled>
                    Select Job Category
                  </option>
                  <option value="OnSite">On Site Job</option>
                  <option value="Remote">Remote Job</option>
                  <option value="Hybrid">Hybrid Job</option>
                  <option value="Part-Time">Part Time Job</option>
                </select>
              </label>
            </div>
          </div>

          <div className=" ">
            <div className="mx-5 mt-2">
              <label htmlFor="Cname">
              <span className="">Company name :</span>
                <input
                  type="text"
                  name="Cname"
                  className="w-full md:py-5
             py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg "
                  placeholder="Company name *"
                  required
                />
              </label>
            </div>
            <div className=" mr-10">
              <label htmlFor="expiredDate">
                <p className=" text-sm ml-5">Expired Date:</p>
                <input
                  type="datetime-local"
                  name="expiredDate"
                  className=" mx-5  w-full md:py-5 py-2 md:text-base  text-sm  rounded-lg px-5  border-4
                   border-gray-300 "
                  placeholder=""
                  required
                />
              </label>
            </div>
          </div>
         
      
          <div className=" flex bg-white w-full  m-auto rounded-lg  gap-3">
         
          <Card
              onClick={handleCompanyButtonClick}
              className=" relative cursor-pointer   w-[200px]  border-divider bg-transparent border-dashed flex-1"
            >
               <span className="ml-5">Add Company Logo :</span>
              {logoUrl ? (
                <img src={logoUrl} alt="a" className="overflow-hidden w-[120px] ml-5" />
              ) : (
                <div
                  className="flex justify-center items-center    gap-4  md:py-10
              py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg ml-5 "
                >
                  {/* <Image />
                  <p className=" ">Add Company Logo</p> */}
                </div>
              )}
           {
            ! logoUrl && <div className=" top-16 left-10 absolute ml-8">
            <input
                 type="file"
                 ref={companyLogoRef}
                 
                 onChange={handleCompanyFileChange}
               />
            </div>
           }
            </Card>
          <Card
                 onClick={handleButtonClick}
              className=" relative cursor-pointer    w-[200px]  border-divider bg-transparent border-dashed flex-1"
            >
               <span className="">Add Job Banner :</span>
              {bannerUrl ? (
                <img src={bannerUrl} alt="a" className="overflow-hidden  mr-5  w-full h-[150px] pr-10 " />
     
              ) : (
                <div
                  className="flex justify-center items-center    gap-4  md:py-10
                  py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg mr-5 "
                >
                  {/* <Image />
                  <p className=" ">Add Job Banner</p> */}
                </div>
              )}
           {
            ! bannerUrl && <div className=" top-16 left-10 absolute">
            <input
                type="file"
                ref={bannerRef}
                // className="hidden"
                onChange={handleFileChange}
              />
            </div>
           }
            </Card>
     
          </div>
          <div className="mx-5  ">
            <label htmlFor="Description">
            <span className="">Job Description :</span>
              <input
                type="text"
                name="Description"
                className="w-full md:py-8
             py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg "
                placeholder="Description"
                required
              />
            </label>
          </div>

          <div className="mx-5 mt-5  ">
            <label htmlFor="MaximumSalary">
            <span className="">Maximum Salary :</span>
              <input
                type="number"
                name="MaximumSalary"
                className="w-full md:py-5
             py-2 md:text-base text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg "
                placeholder="Maximum Salary *"
                required
              />
            </label>
          </div>

          <div className="mx-5 mt-5 ">
            <label htmlFor="MinimumSalary">
            <span className="">Minimum Salary :</span>
              <input
                type="number"
                name="MinimumSalary"
                className="w-full md:py-5
             py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg "
                placeholder="Minimum Salary *"
                required
              />
            </label>
          </div>
        </div>
        <div className=" text-center my-5  bg-blue-500 mx-5 py-4 rounded-lg text-white text-xl">
          <button type="submit">Add Job</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
